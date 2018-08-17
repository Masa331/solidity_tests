pragma solidity ^0.4.23;

contract E {
  uint public n;
  address public sender;
  function setN(uint _n) {
    n = _n;
    sender = msg.sender;
  }
}
