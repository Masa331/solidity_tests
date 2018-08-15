pragma solidity ^0.4.23;

contract Warehouse {
  int public storageInt;
  int[] public additions;

  event Looped(string msg, int current, int addition, int[] additions);

  function add(int addition) public {
    int[] storage proxy = additions;

    proxy.push(addition);

    emit Looped('Ahoj z eventu', storageInt, addition, proxy);

    storageInt += addition;
  }
}
