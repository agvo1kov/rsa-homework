const fs = require('fs');
const NodeRSA = require('node-rsa');

fs.readFile('./source.txt', (err, buf) => {
    const text = buf.toString();
    const key = new NodeRSA({b: 512});
    // console.log(key);
    fs.writeFile('./public.key', key.exportKey('public'), (err) => {});
    fs.writeFile('./private.key', key.exportKey('private'), (err) => {});
    fs.writeFile('./encrypted.txt', key.encrypt(text, 'base64'), (err) => {});
});