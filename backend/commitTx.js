const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

function commit(strTx, callback){
    web3.eth.sendSignedTransaction(strTx)
        .once('transactionHash', function (txid) {
        console.log('\n\ttxid: ' + txid + '\n');
        callback(txid);
        })
        .catch((ex) => {
        console.log(ex);
        })
}

module.exports = {
    commit
}