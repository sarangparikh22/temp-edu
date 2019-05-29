
const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

function createTx(param, callback){
    
    var abi = eval(param.abi);
    var contractAddress = param.contractAddress;

    var instance = new web3.eth.Contract(abi, contractAddress);
    let encodedCallParams = "instance.methods." + param.funcName + ".encodeABI()"
    var encodedCall = eval(encodedCallParams);
    var nonce, gasPrice;

    web3.eth.getTransactionCount(param.accountAddress)
        .then((numberOfTxs) => {
        nonce = numberOfTxs;
        return web3.eth.getGasPrice();
        })
        .then((price) => {
        gasPrice = web3.utils.toBN(price);
        var gasLimit = 4000000;
        var txParams = {
            nonce: '0x' + nonce.toString(16),
            gasPrice: '0x' + gasPrice.toString(16),
            gasLimit: '0x' + gasLimit.toString(16),
            data: encodedCall,
            to: contractAddress
        };

        var tx = new EthereumTx(txParams);
        callback(txParams);
        // tx.sign(Buffer.from(privateKey, 'hex'));

        // var strTx = '0x' + tx.serialize().toString('hex'); // PAY CLOSE ATENTION TO THE '0x'!!!!!

        // web3.eth.sendSignedTransaction(strTx)
        //     .once('transactionHash', function (txid) {
        //     console.log('\n\ttxid: ' + txid + '\n');
        //     })
        //     .catch((ex) => {
        //     console.log(ex);
        //     })
        // })
        // .catch((ex) => {
        // console.log(ex);
        })
}

module.exports = {
    createTx
}