const Wallet = require('ethereumjs-wallet');
const Web3   = require('web3');

const EthereumTx = require('ethereumjs-tx');

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));


function transferEther(privKey, addressWallet, addressToTransfer, callback){
    var value = web3.utils.toBN(web3.utils.toWei(80, 'ether'));
    var nonce, gasPrice;

    web3.eth.getTransactionCount(address)
    .then((numberOfTxs) => {
      nonce = numberOfTxs;
      return web3.eth.getGasPrice();
    })
    .then((price) => {
      gasPrice = web3.utils.toBN(price);
      var gasLimit = 60000;
      var txParams = {
        nonce:    '0x' + nonce.toString(16),
        gasPrice: '0x' + gasPrice.toString(16),
        gasLimit: '0x' + gasLimit.toString(16),
        to:              addressToTransfer,
        value:    '0x' + value.toString(16),
      };
  
      var tx = new EthereumTx(txParams);
      tx.sign(privKey);
  
      var strTx = '0x' + tx.serialize().toString('hex'); // PAY CLOSE ATENTION TO THE '0x'!!!!!
  
      web3.eth.sendSignedTransaction(strTx)
      .once('transactionHash', function(txid) {
        console.log(callback('\n\ttxid: ' + txid + '\n'));
      })
      .catch((ex) => {
        console.log(ex);
      })
    })
}

module.exports = {
    transferEther
}

Prompt.get(schema, function(err, result) {

  var strJson = fs.readFileSync(result.walletFilename, 'utf8');
  var wallet  = Wallet.fromV3(strJson, result.password);

  
});