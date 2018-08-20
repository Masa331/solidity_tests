pragma solidity ^0.4.24;

contract Flow {
    bool public cond;
    int[] public even;

    function setCond(bool _cond) public {
        cond = _cond;
    }

    function result() public view returns(string) {
        if (cond) {
            return 'true';
        } else {
            return 'false';
        }
    }

    function whilo() public pure returns(int) {
        int counter = 0;

        while(counter < 10) {
            counter++;

            if (counter == 5) { break; }
        }

        return counter;
    }

    function populateEven() public {
        int counter = 0;

        while(counter < 10) {
            counter++;

            if (counter % 2 != 0) { continue; }

            even.push(counter);
        }
    }

    function selectEven(int[3] ary) public returns(int) {
        for(uint counter; counter < 4; counter++) {
            if (ary[counter] % 2 == 0) { return ary[counter]; }
        }

        return 0;
    }

    function dowhilo() public pure returns(int) {
        int counter = 0;

        do {
            counter++;
        } while (counter < 10);

        return counter;
    }

    function ternar() public view returns(string) {
        string memory _result = cond ? "ahoj" : "naskedanou";

        return _result;
    }
}
