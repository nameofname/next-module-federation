import 'isomorphic-fetch';
type FetchProps = {
    url: string;
    client?: boolean;
};
export default class PageState {
    private dataStore;
    constructor();
    fetch({ url, client }: FetchProps): Promise<any>;
}
export {};
