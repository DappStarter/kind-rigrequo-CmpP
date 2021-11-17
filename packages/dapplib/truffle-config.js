require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot charge recipe sister purchase install kangaroo army general'; 
let testAccounts = [
"0x6ffaef4038188e5df69e312d8453fcc56e705796c8cb4cd396ddb03fae3916f7",
"0x506c6315a8a068bb20f9b0d21e2e2b195de0d0efca4bd88a0348b45747ccb85d",
"0xe7aa1e26eb5b8348efec17d502c9af56f385a53182eaded7d4ba9200026f0ae2",
"0x930ecaf6d47878deb1560a12a8f766f7fce2177714d36f1f15801b4c480971d9",
"0x2e119888e024a687219811cd2780c1d0dd2709447177d79950d8f8157d636f68",
"0xb4ea76eaca8ab67729a7666b887fa700e302cb18730980b5e54e4fefdde9f94d",
"0x89b10e97d76223e8835dd081b2d878cfb66277f1dd517846d389c759bba2d2bc",
"0x7eba759f30ff884b8015a943c1b1ce202f021225fe8c533e2b622613f0688f8b",
"0xfa84ed8cd0e464e0c2b7bfbfd452e75a05d245876b37426f0e3b73d5eedbade3",
"0x7271fd104f8784e9c8b8d68fc8d3fdfd3f8151eed4122ba2af65da9e6bf13c75"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


