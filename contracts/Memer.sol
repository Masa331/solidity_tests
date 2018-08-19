pragma solidity ^0.4.24;

import "./Memo.sol";

contract Memer {
  address[] public memos;

  function createMemo(string text) public {
    Memo newMemo = new Memo();
    newMemo.setMemo(text);
    address adr = address(newMemo);

    memos.push(adr);
  }

  function memoCount() public view returns(uint) {
    return memos.length;
  }

  function getFirstMemo() public view returns(string) {
    Memo memo = Memo(memos[0]);

    return memo.memo();
  }

  function getSecondMemo() private view returns(string memory actualMemo) {
    Memo memo = Memo(memos[1]);
    actualMemo = memo.memo();
  }

  function getTwoMemos() public view returns(string, string) {
    string memory first = getFirstMemo();
    string memory second = getSecondMemo();

    return(first, second);
  }
}
