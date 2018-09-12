pragma solidity ^0.4.24;

contract CommonLib2 {
  string public result;

  function word() public {
    result = "hi";
  }
}

contract CommonLib3 {
  string public result;

  function word() public {
    result = "bye";
  }
}

contract Fund {
  string public result;
  address public lib;

  function setLib(address newAddr) public {
    lib = newAddr;
  }

  function word() public {
    bool success = lib.delegatecall(bytes4(keccak256("word()")));

    if(!success) {
      revert('FOOOOOOOOOOOOOOOOOOK');
    }
  }
}
