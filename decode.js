const NodeRSA = require('node-rsa');

const fs = require('fs');
fs.readFile('./private.key', (err, buf) => {
    const key = new NodeRSA(buf.toString());
    fs.readFile('./encrypted.txt', (err, buf) => {
        const text = key.decrypt(buf.toString(), 'utf8');
        fs.writeFile('./decrypted.txt', text, (err) => {});
    });
});