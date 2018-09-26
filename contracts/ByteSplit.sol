pragma solidity ^0.4.25;
// "143cf4b8-938c-4994-bd3e-350e45af507c"
// "143cf4b8938c4994bd3e350e45af507c"
contract Byter {
  bytes16 public guid;

  function something(string _guid, int _amount) public {
    setGuid(bytes(_guid));
  }

  function setGuid(bytes _data) public {
    guid = bytesToBytes16(_data, 0);
  }

  function bytesToBytes16(bytes b, uint offset) private pure returns (bytes16) {
    bytes16 out;

    for (uint i = 0; i < 16; i++) {
      out |= bytes16(b[offset + i] & 0xFF) >> (i * 8);
    }

    return out;
  }
}
