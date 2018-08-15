const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:8545');

const Looper = require('./build/contracts/Looper.json');

main = async () => {
  const accounts = await web3.eth.getAccounts()

  looper = await (new web3.eth.Contract(Looper.abi))
    .deploy({ data: Looper.bytecode, arguments: [2] })
    .send({ from: accounts[0], gas: '1000000' });

  console.log('Looper addr is: ', looper.options.address);
}

main();
