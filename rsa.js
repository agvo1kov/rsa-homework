const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});

const fs = require('fs');
let text = '';

fs.readFile('./source.txt', (err, buf) => {
    text = buf.toString();

    const encrypted = key.encrypt(text, 'base64');
    console.log('encrypted: ', encrypted);

    const decrypted = key.decrypt(encrypted, 'utf8');
    console.log('decrypted: ', decrypted);

    const publicKey = key['$cache']['pkcs8-public-pem'];
    const privateKey = key['$cache']['pkcs8-private-pem'];

    fs.writeFile('./public.key', publicKey, (err) => {
        if (err) {
            console.log(err);
        }
    });
    fs.writeFile('./private.key', privateKey, (err) => {
        if (err) {
            console.log(err);
        }
    });
    fs.writeFile('./encrypted.txt', encrypted, (err) => {
        if (err) {
            console.log(err);
        }
    });
});


