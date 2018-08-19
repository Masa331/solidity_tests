pragma solidity ^0.4.24;

contract Enumz {
    enum Mood { Happy, Sad, Playful }

    Mood public enm;

    function setSad() public {
      enm = Mood.Sad;
    }
}
