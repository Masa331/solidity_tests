pragma solidity ^0.4.24;

contract Convertor {
  function szbo() public pure returns(int) {
    int amount = 100 szabo;
    return(amount);
  }

  function blk() public view returns(uint) {
    return block.number;
  }

  function gasLimit() public view returns(uint) {
    return block.gaslimit;
  }

  function kekkak(string text) public pure returns(bytes32) {
    return(keccak256(text));

  }

  function isEven(int num) public pure onlyEven(num) returns(bool result) {
    result = (num % 2 == 0);
  }

  modifier onlyEven(int num) {
    require(num % 2 == 0, "Can be called only with even numbers");
     _;
  }
}
