import 'isomorphic-fetch';

const rand = Math.floor(Math.random() * 100);

type FetchProps = {
    url: string;
    client?: boolean;
}

type DataStore = {
    [key:string]: any
}

export default class PageState {
    private dataStore: DataStore = {};

    constructor() {
        console.log('you at least have the thing', rand);
        console.log('this is ur window', typeof window);    
    }

    async fetch({ url, client }: FetchProps) {
        if (this.dataStore[url]) {
            return this.dataStore[url];
        }
        return fetch(url);
    }

}