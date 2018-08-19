pragma solidity ^0.4.24;

contract Revertor {
  function fail() public {
    revert();
  }

  function failWithMessage() public {
    // revert("blah");
    require(1 > 2, "blah");
  }
}
