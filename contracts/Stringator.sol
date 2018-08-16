pragma solidity ^0.4.23;

contract Stringator {
    string public memo;

    function change(string newMemo) public {
        memo = newMemo;
    }

    function length() public view returns(uint) {
        return bytes(memo).length;
    }

    function bytesLengthIsNotReliable() public view returns(uint) {
        string memory str = "Д";
        bytes memory bt = bytes(str);

        return bt.length;
    }

    function clear() public {
        delete memo;
    }
}
