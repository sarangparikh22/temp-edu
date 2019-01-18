pragma solidity ^0.5.0;

/*contract RegistrationAndCertificateContractFactory {

    struct Student {
        string fullName;
        uint phoneNumber;
        string emailId;
        address[] registrationContracts;
        mapping(address => address) registrationContractByCollege;
    }
    
    struct College {
        string instituteName;
        string instituteCode;
        string instituteAISHECode;
        address[] registrationContracts;
        mapping(address => address) registrationContractByStudent;
    }
    
    Student[] studentList;
    mapping(address => Student) studentInfo;
    
    College[] collegeList;
    mapping(address => College) collegeInfo;
    
    
    function createStudent(string memory name, uint phoneNumber, string memory emailId) public doesStudentExist(msg.sender){
        Student memory newStudent = Student(name, phoneNumber,emailId);
        studentList.push(newStudent);
        studentInfo[msg.sender] = newStudent;
    }
    
    
    function createCollege(string memory instituteName, string memory instituteCode, string memory instituteAISHECode) public {
        College memory newCollege = College(instituteName, instituteCode, instituteAISHECode);
        collegeList.push(newCollege);
        collegeInfo[msg.sender] = newCollege;
    }
    
    modifier doesStudentExist(address studentAddress) {
        // check if studentAddress is present in studentList or not.
        _;
    }

   /* 
    modifier doesCollegeExist(address collegeAddress) {
        // check if collegeAddress is present in collegeList or not
        _;
    }
    
    modifier notAlreadyRegistered(address studentAddress, address collegeAddress) {
        // check if collegeStudentRegistrationContracts[collegeAddress][studentAddress] is empty or notAlreadyRegistered
        _;
    }
    
    function startRegistration(address collegeAddress) doesStudentExist(msg.sender) doesCollegeExist(collegeAddress) 
    notAlreadyRegistered(studentAddress,collegeAddress) public{
        address newRegistrationContract = new RegistrationContract
        (msg.sender, collegeAddress, collegeRegNumber, collegeEmailId, collegeDoJ, collegeDateOfPassing);
        studentInfo[msg.sender].registrationContracts.push(newRegistrationContract);
        studentInfo[msg.sender].registrationContractsByCollege[collegeAddress].push(newRegistrationContract);
    }
    
    function verifyStudentProfile(address studentAddress) public {
        address registrationContractAddress = collegeInfo[msg.sender].registrationContractsByStudent[studentAddress];
        RegistrationContract registrationContract = new RegistrationContract(registrationContractAddress);
        registrationContract.verifyRegistration();
    }
    
    function approveRegistration(address studentAddress) public
    {
        address registrationContractAddress = collegeInfo[msg.sender].registrationContractsByStudent[studentAddress];
        RegistrationContract registrationContract = new RegistrationContract(registrationContractAddress);
        registrationContract.approveRegistration();
    }
    
    function acceptRegistration(address collegeAddress) public
    {
        address registrationContractAddress = studentInfo[msg.sender].registrationContractsByCollege[collegeAddress];
        RegistrationContract registrationContract = new RegistrationContract(registrationContractAddress);
        registrationContract.acceptRegistration();
    }
    
    function getRegistrationStatus(address studentAddress, address collegeAddress) public view returns (string memory) {
        address registrationContractAddress = studentInfo[studentAddress].registrationContractsByCollege[collegeAddress];
        RegistrationContract registrationContract = new RegistrationContract(registrationContractAddress);
        return registrationContract.getRegistrationStatus();
    }
    
    
} */
