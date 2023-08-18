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