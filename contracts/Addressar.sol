pragma solidity ^0.4.23;

contract Addressar {
  address public addr;
  bool public result;

  int public storageInt;

  function() public payable {}

  constructor() public payable {}

  function setAddr(address _addr) public {
    addr = _addr;
  }

  function thisBalance() public view returns(uint) {
    return address(this).balance;
  }

  function balance() public view returns(uint) {
    return addr.balance;
  }

  function trans(address _addr, uint amount) public {
    _addr.transfer(amount);
  }

  function calr(int addition) public {
    // these work!!
    // result = addr.call.gas(1000000)(bytes4(sha3("setTen()")));
    // result = addr.call(bytes4(keccak256("setTen()")));
    // result = addr.call.gas(1000000)(bytes4(sha3("something(string)")), 'ahoj');
    // result = addr.call.gas(1000000)(bytes4(sha3("setFive(int256)")), 5);
    // result = addr.call(bytes4(sha3("setFive(int256)")), 5);
    // result = addr.call(bytes4(sha3("add(int256)")), 5);

    result = addr.call(bytes4(sha3("add(int256)")), addition);

    // don't work
    // result = addr.call.gas(1000000)(bytes4(sha3("add(int8)")), 10);
    // result = addr.call("setTen()");
    // result = addr.call("add()", 5);
  }

  function delc(int addition) public {
    // result = addr.delegatecall(bytes4(sha3("add(int256)")), addition);
    // result = addr.call(bytes4(sha3("add(int256)")), addition);
    // result = addr.delegatecall.gas(1000000)("setTen()");

    result = addr.delegatecall(bytes4(keccak256("setTen")));
  }
}
