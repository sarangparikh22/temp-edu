pragma solidity ^0.5.0;
import "./RegistrationContract.sol";

contract RegistrationAndCertificateContractFactory {

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
    
    Student[]  studentList;
    mapping(address => Student) studentsInfo;
    
    College[]  collegeList;
    mapping(address => College) collegesInfo;
    
    function getFirstCollege(address _studentAddress) public view returns(address){
        return collegesInfo[msg.sender].registrationContractByStudent[_studentAddress];
    }
    function getFirstStudent() public view returns(address){
        return studentsInfo[msg.sender].registrationContracts[0];
    }
    
    function createStudent( string memory name, uint phoneNumber,  string memory emailId) public doesStudentExist(msg.sender){
        Student memory newStudent = Student(name, phoneNumber,emailId, new address[](0) );
        studentList.push(newStudent);
        studentsInfo[msg.sender] = newStudent;
    }
    
    
    function createCollege(string memory instituteName, string memory instituteCode, string memory instituteAISHECode) public {
        College memory newCollege = College(instituteName, instituteCode, instituteAISHECode, new address[](0));
        collegeList.push(newCollege);
        collegesInfo[msg.sender] = newCollege;
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
    
    function startRegistration(
        address collegeAddress, string memory collegeRegNumber, string memory collegeEmailId, uint collegeDoJ, uint collegeDateOfPassing) public doesStudentExist(msg.sender) doesCollegeExist(collegeAddress) notAlreadyRegistered(msg.sender, collegeAddress) {
        RegistrationContract newRegistrationContract = new RegistrationContract
        (msg.sender, collegeAddress, collegeRegNumber, collegeEmailId, collegeDoJ, collegeDateOfPassing);
        studentsInfo[msg.sender].registrationContracts.push(address(newRegistrationContract));
        studentsInfo[msg.sender].registrationContractByCollege[collegeAddress] = address(newRegistrationContract);
        collegesInfo[collegeAddress].registrationContracts.push(address(newRegistrationContract));
        collegesInfo[collegeAddress].registrationContractByStudent[msg.sender] = address(newRegistrationContract);
    }
    
    function verifyStudentProfile(address studentAddress) public{
        //address registrationContractAddress = collegesInfo[msg.sender].registrationContractByStudent[studentAddress];
        RegistrationContract registrationContract = RegistrationContract(collegesInfo[msg.sender].registrationContractByStudent[studentAddress]);
        registrationContract.verifyStudentProfile(msg.sender);
    }
    
    
    function approveRegistration(address studentAddress) public
    {
        address registrationContractAddress = collegesInfo[msg.sender].registrationContractByStudent[studentAddress];
        RegistrationContract registrationContract = RegistrationContract(registrationContractAddress);
        registrationContract.approveRegistration(msg.sender);
    }
    
    function acceptRegistration(address collegeAddress) public
    {
        address registrationContractAddress = studentsInfo[msg.sender].registrationContractByCollege[collegeAddress];
        RegistrationContract registrationContract = RegistrationContract(registrationContractAddress);
        registrationContract.acceptRegistration(msg.sender);
    }
    
    function getRegistrationStatus(address studentAddress, address collegeAddress) public view returns (string memory) {
        address registrationContractAddress = studentsInfo[studentAddress].registrationContractByCollege[collegeAddress];
        RegistrationContract registrationContract = RegistrationContract(registrationContractAddress);
        return registrationContract.getRegistrationStatus();
    }
    
}