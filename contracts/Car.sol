pragma solidity ^0.4.24;

interface Vehicle {
  function fortyTwo() public pure returns(int);
  function fortyOne() public pure returns(int);
}

library Math {
  function add(int num, int num2) public pure returns(int) {
    return num + num2;
  }
}

contract Car is Vehicle {
  int public wheelNumber;
  int public windowNumber;

  constructor() public {
    wheelNumber = 4;
    windowNumber = 4;
  }

  function fortyTwo() public pure returns(int) {
    return(42);
  }

  function fortyOne() public pure returns(int) {
    return(41);
  }

  function wheelsAndWindows() public view returns(int) {
    return Math.add(wheelNumber, windowNumber);
  }
}
