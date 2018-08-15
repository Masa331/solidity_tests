var Web3 = require('web3');
var web3 = new Web3('http://127.0.0.1:8545');
var accounts = await web3.eth.getAccounts();
var alice = accounts[0]

var W = require('./build/contracts/Warehouse.json');

var w = new web3.eth.Contract(W.abi);
w = await w.deploy({ data: W.bytecode }).send({ from: alice, gas: '1000000' });
await w.methods.storageInt().call();
