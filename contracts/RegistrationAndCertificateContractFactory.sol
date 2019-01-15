pragma solidity ^0.5.1;

contract RegistrationAndCertificateContractFactory {

    struct Student {
        string name;
        uint age;
        address[] registrationContracts;
        mapping(address => address[]) registrationContractsByCollege;
    }
    
    struct College {
        string name;
        uint age;
        address[] registrationContracts;
        mapping(address => address[]) registrationContractsByStudent;
    }
    
    Student[] studentList;
    mapping(address => Student) studentInfo;
    
    College[] collegeList;
    mapping(address => College) collegeInfo;
    
    
    function createStudent(string name, uint age) public doesStudentExist(msg.sender){
        Student newStudent = Student(name, age);
        studentList.push(newStudent);
        studentInfo[msg.sender] = newStudent;
    }
    
    
    function createCollege() {
        College newCollege = College(name, age);
        collegeList.push(newCollege);
    }
    
    modifier doesStudentExist(address studentAddress) {
        // check if studentAddress is present in studentList or not.
        _;
    }
    
    modifier doesCollegeExist(address collegeAddress) {
        // check if collegeAddress is present in collegeList or not
        _;
    }
    
    modifier notAlreadyRegistered(address studentAddress, address collegeAddress) {
        // check if collegeStudentRegistrationContracts[collegeAddress][studentAddress] is empty or notAlreadyRegistered
        _;
    }
    
    function startRegistration(address collegeAddress) doesStudentExist(msg.sender) doesCollegeExist(collegeAddress) notAlreadyRegistered(studentAddress, collegeAddress) public{
        address newRegistrationContract = new RegistrationContract(msg.sender, collegeAddress, collegeId, collegeJoinDate, collegeEndDate);
        studentInfo[msg.sender].registrationContracts.push(newRegistrationContract);
        studentInfo[msg.sender].registrationContractsByCollege[collegeAddress].push(newRegistrationContract);
    }
    
    function getRegistrationStatus(address studentAddress, address collegeAddress) public view returns (String) {
            address registrationContractAddress = studentInfo[studentAddress].registrationContractsByCollege[collegeAddress];
            RegistrationContract registrationContract= new RegistrationContract(registrationContractAddress);
            return registrationContract.getStage();
    }
    
