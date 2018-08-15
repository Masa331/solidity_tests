pragma solidity ^0.4.23;

contract Looper {
  uint8 public loops;
  event Looped(string msg, uint step);

  constructor(uint8 _loops) public {
    loops = _loops;
  }

  function loop() public {
    for (uint counter = 0; counter < loops; counter++) {
      emit Looped('Ahoj z eventu', counter);
    }

    loops = loops + 1;
  }
}
