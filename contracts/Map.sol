pragma solidity ^0.4.24;

contract Map {
    mapping(int => string) public positions;

    function setPosition(int position, string value) public {
        positions[position] = value;
        setNancy();
    }

    function setNancy() internal {
        mapping(int => string) temp = positions;

        temp[4] = 'Nancy';
    }
}
