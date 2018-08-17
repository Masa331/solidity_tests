deploy = async () => {
  var Web3 = require('web3');
  web3 = new Web3('http://127.0.0.1:8545');
  var accounts = await web3.eth.getAccounts();
  var alice = accounts[0];

  B = require('./build/contracts/Addressar.json');

  b = new web3.eth.Contract(B.abi);
  b = await b.deploy({ data: B.bytecode }).send({ from: alice, gas: '1000000' });

  return [web3, accounts, b];
}

module.exports = { f: deploy }
