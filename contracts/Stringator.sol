pragma solidity ^0.4.23;

contract Stringator {
  string public memo;

  function change(string newMemo) public {
    memo = newMemo;
  }

  function memoLength() public view returns(uint) {
    string[10] memory copy = "ahoj";

    return copy.length;
  }
}
