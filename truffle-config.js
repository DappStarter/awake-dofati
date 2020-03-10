require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stone dash office company hard light army general'; 
let testAccounts = [
"0xebcf4949bcc9cf07c4c044f43804c10d6b39b9d7926820928affc1f2183fb096",
"0x870da56969cf65dc2ebf179f606c91f30b0b66dff5f39b4a05b49ee7383216de",
"0x6dac642cf002cf679a6d7ea2c9c8892fe5ca4803e0bd6daf4d3a4feb0617bfc8",
"0x0391ba3ea697e95e69bda149cb8871f6d0e15124b0899e1f45e9c42ea92219c0",
"0xfc9e377006f2b04392e70ec0b01e5a55023adc95a543d61e796fd6bf49b97d20",
"0x91e2278ee0ede4c95648a3dbf8e03498ce8135c7c62beb01a277b16b48969e63",
"0x80032052b367fb07728c8f994261914e9aefb580478ee68027ff5f441a67994d",
"0x2b0a9abe2727cd4d32388026a3657e529a6fbfb75a23a70072fbee72b9b4959b",
"0x527c0d23ae1a7987a16ec4109dc9dbdf25c07829d6a38bcc65be5dc66bedb932",
"0x87687e1b9f815621214e1711b77989296e702fb32ae08fb9b3dfd7e0a69693f1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
