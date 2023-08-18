/**
 * This function will patch the global fetch in Node.js to
 * deduplicate GET requests. This concept is taken from React
 * which patches fetch when using React Server Components
 * as per Next.js version 13. See the following for more 
 * details : 
 * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
 * 
 * Please be aware that this change introduces a small risk
 * that something will go wrong in the future! See this 
 * discussion for more : 
 * https://www.reddit.com/r/javascript/comments/yex2oj/so_apparently_theres_now_code_in_react_to/
 */

const store = new Map();
let done = false;

export default function patchFetch() {
    if (done) return;
    const coreFetch = fetch;

    globalThis.fetch = function(resource, options = {}) {
        const notGet = options?.method && options.method !== 'GET';
        if (notGet) {
            return coreFetch.apply(globalThis, arguments);
        }

        let url;
        if (typeof resource === 'string') {
            url = resource;
        } else if (typeof resource === 'object') {
            url = resource.url;
        }

        const cached = store.get(url);
        if (cached) {
            return cached;
        } else {
            const res = coreFetch.apply(globalThis, arguments);
            store.set(url, res);
            return res;
        }
    }
}