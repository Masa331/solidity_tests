pragma solidity ^0.4.24;

contract Place {
  int public counter;

  function increment() public {
    counter++;
    counter++;
    counter++;
    counter++;
  }
}

contract Here is Place {
  function increment() public {
    counter++;
    counter++;
  }
}

contract What {
  int public memo;

  constructor(int _memo) public {
    memo = _memo * 2;
  }

  function increment() public {
    revert();
  }
}

contract TheEnd is What, Here {
  constructor(int _memo) What(_memo * 2) {}

  function increment() public {
    counter++;
    super.increment();
    Place.increment();
  }
}
