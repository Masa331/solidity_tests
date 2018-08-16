pragma solidity ^0.4.23;

contract Byter {
  bytes public myBytes;

  function setBytes(bytes _newBytes) public {
    myBytes = _newBytes;
  }

  function compare(bytes challenger) public view returns(bool) {
    bool result = keccak256(myBytes) == keccak256(challenger);

    return result;
  }

  function getSecond() public view returns(byte) {
    return myBytes[1];
  }

  function append(byte addition) public {
    myBytes.push(addition);
  }
}
