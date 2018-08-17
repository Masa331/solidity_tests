pragma solidity ^0.4.23;

contract Structor {
  struct Person {
    string name;
    int8 age;
  }

  Person public customer;

  function setTom() public {
    customer = Person({ name: 'Tom', age: 12 });
  }

  function setAndy() public {
    customer = Person('Andy', 24);
  }

  function setName(string name) public {
    customer.name = name;
  }

  function getName() public view returns(string) {
    return customer.name;
  }
}
