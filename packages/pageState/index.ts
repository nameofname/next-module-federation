// import { useState } from 'react';

const rand = Math.floor(Math.random() * 100);

export default function doIt() {
// export default function doIt({ url, client }) {
    console.log('you at least have the thing', rand);
    console.log('this is ur window', typeof window);
}