pragma solidity ^0.5.1;

contract RegistrationAndCertificateContractFactory {
    
    mapping(address => mapping(address => address)) collegeStudentRegistrationContracts;
    mapping(address => mapping(address => address)) collegeStudentCertificateContracts;
    
    
    struct Student {
        string name;
        uint age;
        address[] registrationContracts;
        address[] cerficateContracts;
        
    }
    
    struct College {
        string name;
        uint age;
        address[] registrationContracts;
        address[] cerficateContracts;
        
    }
    
    Student[] studentList;
    mapping(address => Student) studentInfo;
    function createStudent(string name, uint age) doesStudentExist(msg.sender){
        Student newStudent = Student(name, age);
        studentList.push(newStudent);
        studentInfo[msg.sender] = newStudent;
    }
    
    College[] collegeList;
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
        address newRegistrationContract = new RegistrationContract(msg.sender, collegeAddress, registrationInfo);
        collegeStudentRegistrationContracts[collegeAddress][msg.sender] = newRegistrationContract;
        studentInfo[msg.sender].registrationContracts.push(newRegistrationContract);
        
    }
    
    function getRegistrationStatus(address studentAddress, address collegeAddress) public view returns (String) {
            address registrationContractAddress = collegeStudentRegistrationContracts[collegeAddress][studentAddress];
            RegistrationContract registrationContract= new RegistrationContract(registrationContractAddress);
            return registrationContract.getStage();
    }
    
    function createCertificateContract() public{
        address newCertificateContract = new CertificateContract();
    }
    
    function getCertificateContract(address studentAddress, address collegeAddress) public view returns (address) {
            collegeStudentCertificateContracts[collegeAddress][studentAddress];
    }
    
}
