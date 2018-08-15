const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:8545');

const addr = '0xCca2FCce41C1e7CBc989a9c358042E2b6474ecE9';
const Looper = require('./build/contracts/Looper.json');

main = async () => {
  const accounts = await web3.eth.getAccounts();
  const looper = new web3.eth.Contract(Looper.abi, addr);

  let result = await looper.methods.loop()
    .send({ from: accounts[0] });

  console.log('Result is: ', result);
}

main();
