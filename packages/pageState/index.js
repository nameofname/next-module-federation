"use strict";
// import { useState } from 'react';
Object.defineProperty(exports, "__esModule", { value: true });
const rand = Math.floor(Math.random() * 100);
function doIt() {
    // export default function doIt({ url, client }) {
    console.log('you at least have the thing', rand);
    console.log('this is ur window', typeof window);
}
exports.default = doIt;
