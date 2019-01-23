pragma solidity ^0.5.0;


contract RegistrationContract {
    address studentAddress;
    address collegeAddress;
        
    uint a = 0;
    struct StudentInfo {
        string collegeRegNumber;
        string collegeEmailId;
        uint collegeDoJ;
        uint collegeDateOfPassing;
    }
        
    StudentInfo studentInfo;
         
    constructor(
            address _studentAddress, address _collegeAddress, string memory collegeRegNumber, string memory collegeEmailId, uint collegeDoJ, uint collegeDateOfPassing) public{
        studentAddress = _studentAddress;
        collegeAddress = _collegeAddress;
        studentInfo = StudentInfo(collegeRegNumber, collegeEmailId, collegeDoJ, collegeDateOfPassing);
    }
        
        
    enum Stages {
        RequestforRegistration,
        VerifyStudentProfile,
        ApproveRegistration,
        AcceptRegistration
    }
        
    Stages public stage = Stages.RequestforRegistration;
    uint public creationTime = now;
        
    modifier atStage(Stages _stage) {
        require(
            stage == _stage,
            "Error atStage modifier");
        _;
    }
        //  // This modifier goes to the next stage
        // // after the function is done.
    modifier transitionNext(){
        _;
        nextStage();
    }
    function nextStage() internal {
        stage = Stages(uint(stage) + 1);
    }
        
      
    modifier isStudent(address addr) {
        require(
            addr == studentAddress,
            "Error modifier isStudent");
        _;
    }
      
    modifier isCollege(address addr) {
        require(
            addr == collegeAddress,
            "Error modifier isCollege");
        _;
    }
        
    function getRegistrationStatus() public view returns (string memory) {
        if(Stages.RequestforRegistration == stage){
            return "RequestforRegistration";
        }
        if(Stages.VerifyStudentProfile == stage){
            return "VerifyStudentProfile";
        }
        if(Stages.ApproveRegistration == stage){
            return "ApproveRegistration";
        }
        if(Stages.AcceptRegistration == stage){
            return "AcceptRegistration";
        }
    }
        
        
    function verifyStudentProfile() public atStage(Stages.RequestforRegistration) isCollege(tx.origin) transitionNext
    {
            
    }
        
    function approveRegistration() public atStage(Stages.VerifyStudentProfile) isCollege(tx.origin) transitionNext
    {
            
    }
        
    function acceptRegistration() public atStage(Stages.ApproveRegistration) isStudent(tx.origin) transitionNext
    {
            
    }
        
    function getStudentAddress() public view returns(address){
        return studentAddress;
    }
    function getCollegeAddress() public view returns(address){
        return collegeAddress;
    }
    function getStage() public view returns(uint){
        return uint(stage);
    }
        
}