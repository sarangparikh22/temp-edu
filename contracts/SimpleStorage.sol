pragma solidity ^0.4.23;

contract SimpleStorage {
    uint storedData;
    string name;

    struct Student {
        string nme;
        uint phone;    
    }
    Student[] studentList;
    mapping(address => Student) studentsInfo;

    function createS(string memory _name, uint _phone) public {
        Student memory newStudent = Student(_name,_phone);
        studentList.push(newStudent);
        studentsInfo[msg.sender] = newStudent;
    }

    function getS() public view returns(string memory,uint) {
        return(studentsInfo[msg.sender].nme,studentsInfo[msg.sender].phone);
    
    }

    function set(string memory _name, uint x) public {
        storedData = x;
        name = _name;

    }

    function get() public view returns (string memory,uint) {
        return (name,storedData);
    }
}
