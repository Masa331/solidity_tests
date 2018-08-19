pragma solidity ^0.4.24;

contract Memo {
  string public memo;

  function setMemo(string _memo) public {
    memo = _memo;
  }
}
