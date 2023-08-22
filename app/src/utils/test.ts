// import patchFetch from "./patchFetch.js";
// patchFetch();

// console.log('Mfe1 : fetching');
// let data = await fetch("http://localhost:5555/two.json");
// console.log('Mfe1 : DONE fetching');
// await data.json();


// console.log('Mfe2 : fetching');
// let serverSideData = await fetch('http://localhost:5555/two.json');
// console.log('Mfe2 : DONE fetching');
// await serverSideData.json();

type Method = 'json' | 'text';

class MethodCacher {
    method: Method;
    response: Response;
    cached: Promise<any> | null;

    constructor(response: Response, method: Method) {
        this.method = method;
        this.response = response;
        this.cached = null;
    }

    _jsonOrText() {
        if (this.cached === null) {
            this.cached = this.response[this.method]();
        }
        return this.cached;
    }

    json() {
        return this._jsonOrText();
    }
    text() {
        return this._jsonOrText();
    }
}


/**
 * 
 * The following works but classes > constructors in TS
 * 
function CacherFn() {
    cache = {};
    return function(prop) {
        console.log('retreiving value for', prop);
        if(cache[prop]) {
            return cache[prop];
        }
        cache[prop] = Math.random();
        console.log('generating...', cache[prop]);
        cache[prop];
        return this;
    }
}

const cacher = new CacherFn();
cacher('a')
cacher('a')
cacher('a')
cacher('a')
cacher('a')
cacher('a')
cacher('a')
cacher('b')
cacher('b')
 */
