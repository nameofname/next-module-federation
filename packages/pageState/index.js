"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
const rand = Math.floor(Math.random() * 100);
class PageState {
    constructor() {
        this.dataStore = {};
        console.log('pageState: rand', rand);
        console.log('pageState: window', typeof window);
    }
    fetch({ url, client }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.dataStore[url]) {
                return this.dataStore[url];
            }
            return fetch(url);
        });
    }
}
exports.default = PageState;
