pragma solidity ^0.4.24;

contract Ary {
    int[2][] public ary;
    int[5] public simple;
    int[] public dyn;

    function setSimple() public {
        int[5] memory temp;
        simple = temp;
    }

    function setDyn() public {
        int[] memory temp = new int[](5);
        dyn = temp;
    }

    function setMember(uint a, uint p, int value) public {
        ary[a][p] = value;
    }

    function setFive() public {

        ary[3][0] = 5;
    }

    function firstAry() public view returns(int[2]) {
        return ary[0];
    }

    function setAry(int[2][] newAry) public {
        ary = newAry;
    }

    function length() public view returns(uint) {
        return ary.length;
    }

    function setWholeAry() public {
        ary[1] = [1, 8];
    }

    function append() public {
        ary.push([0, 0]);
    }
}
