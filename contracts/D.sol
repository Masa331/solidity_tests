pragma solidity ^0.4.23;

contract D {
  uint public n;
  address public sender;

  function delegatecallSetN(address _e, uint _n) {
    _e.delegatecall(bytes4(sha3("setN(uint256)")), _n); // D's storage is set, E is not modified 
  }
}
