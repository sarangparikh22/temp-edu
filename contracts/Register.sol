pragma solidity ^0.5.0;

contract Register {

    struct Student {
        string fullName;
        string motherName;
        uint mobile;
        string regNo;
        uint dateOfJoining;
        uint dateOfPassing;
    }

    Student[] studentList;
    mapping(address=>Student) studentInfo;

    function createStudent(
        string memory _fullName, string memory _motherName, uint _mobile, string memory _regNo, uint _dateOfJoining, uint _dateOfPassing) public{
        Student memory newStudent = Student(_fullName, _motherName, _mobile, _regNo, _dateOfJoining, _dateOfPassing);
        studentList.push(newStudent);
        studentInfo[msg.sender] = newStudent;

    }

   /* function getStudent() public{
        studentInfo(msg.sender);
    }

    function get() public view returns (string memory,string memory,uint,string memory,uint,uint) {

        a = studentInfo[msg.sender];
        return (a.fullName,a.motherName,a.mobile,a.regNo,a.dateOfJoining,a.dateOfPassing);
    } */

}