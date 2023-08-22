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

export function patchFetch() {
    if (done) return;
    const coreFetch = globalThis.fetch;

    globalThis.fetch = async function(resource, options = {}) {
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
            console.log('caching core fetch...');
            const res = await coreFetch.apply(globalThis, arguments);
            const wrapped = wrapResponse(res);
            store.set(url, wrapped);
            return wrapped;
        }
    }
}

export function clearFetchCache() {
    store.clear();
}

function CacherFn(response, prop) {
    let cache;
    return async function() {
        console.log('retreiving value for', prop);
        if(cache) {
            return cache;
        }
        console.log('generating for prop...', prop);
        cache = await response[prop](...arguments);
        return cache;
    }
}

function wrapResponse(response) {
    const jsonTextCache = {};
    const handler = {
        get(target, prop) {
            console.log('what is this symbol', prop)
            if ('json' === prop || 'text' === prop) {
                return () => {
                    if (!jsonTextCache[prop]) {
                        jsonTextCache[prop] = response[prop]();
                    }
                    return jsonTextCache[prop];
                }
            }
            return response[prop];
        },
    };
    return new Proxy(response, handler);
}

// /**
//  * Fetch wrapper allows multiple callers to execute 
//  * await res.json() or await res.text() 
//  * ... otherwise Node will throw an error. Eg. try the following : 
//  * const res = fetch('...');
//  * let j = await res.json();
//  * let k = await res.json(); // Error
//  */
// class FetchWrapper extends Response {
//     originText;
//     originJson;

//     constructor(response) {
//         console.log('constructor... supering');
//         super();
//         for (let i in response) {
//             this[i] = response[i];
//         }
//         console.log('super complete, what is this', this);
//         this.originJson = this.json;
//         this.originText = this.text;
//         this.json = this._overRideJson;
//         this.text = this._overRideText;
//     }

//     _overRideJson = async function() {
//         let json;
//         return new Promise(async (resolve) => {
//             if (!json) {
//                 json = await this.originJson();
//                 console.log('got ur json here', json)
//             }
//             resolve(json);
//         });
//     }

//     _overRideText = function() {
//         // let text;
//         // return new Promise(async (resolve) => {
//         //     if (!text) {
//         //         text = await this.originText();
//         //     }
//         //     resolve(text);
//         // });
//     }

// }
