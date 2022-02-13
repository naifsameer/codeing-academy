// const {} = require('./text.js')
const { checkPassword, decrypt, encrypt } = require('./text.js');

const sampleText = 'Naif here';

console.log(encrypt(sampleText, 'naif'));

console.log(decrypt(encrypt(sampleText, 'naif'), 'naif'));

console.log(checkPassword('hi there'));
