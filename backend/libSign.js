const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

function signTx(txParams, privateKey, callback){
    var tx = new EthereumTx(JSON.parse(txParams));
    console.log(txParams);
    console.log('NONCE: '+ txParams.nonce);
    // tx.nonce = txParams.nonce;
    tx.sign(Buffer.from(privateKey, 'hex'));

    var strTx = '0x' + tx.serialize().toString('hex'); // PAY CLOSE ATENTION TO THE '0x'!!!!!
    callback(strTx);
    // web3.eth.sendSignedTransaction(strTx)
    //     .once('transactionHash', function (txid) {
    //     console.log('\n\ttxid: ' + txid + '\n');
    //     })
    //     .catch((ex) => {
    //     console.log(ex);
    //     })
}

module.exports = {
    signTx
}