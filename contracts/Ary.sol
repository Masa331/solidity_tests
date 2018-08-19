pragma solidity ^0.4.23;

contract Ary {
  int[] public acumulator;
  int[3] public fixedAc;

  function setAry() public {
    acumulator = [1, 2, 4];
    fixedAc = [3, 6, 9];
  }

  function length() public view returns(uint) {
    return acumulator.length;
  }

  function append(int member) public {
    acumulator.push(member);
  }

  function secondElement() public view returns(int) {
    return acumulator[1];
  }

  function setMember(int num) public {
    fixedAc[2] = num;
  }
}
