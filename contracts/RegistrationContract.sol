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
        require(stage == _stage);
        _;
    }
        //  // This modifier goes to the next stage
        // // after the function is done.
    modifier transitionNext()
    {
        _;
        nextStage();
    }
        
    function nextStage() internal {
        stage = Stages(uint(stage) + 1);
    }
        
      
    modifier isStudent(address addr) {
        require(addr == studentAddress);
        _;
    }
      
    modifier isCollege(address addr) {
        require(addr == collegeAddress);
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
        
        
    function verifyStudentProfile(address _collegeAddress) public atStage(Stages.RequestforRegistration) isCollege(_collegeAddress) transitionNext
    {
            
    }
        
    function approveRegistration(address _collegeAddress) public atStage(Stages.VerifyStudentProfile) isCollege(_collegeAddress) transitionNext
    {
            
    }
        
    function acceptRegistration(address _studentAddress) public atStage(Stages.ApproveRegistration) isStudent(_studentAddress) transitionNext
    {
            
    }
        
    function incVal() public{
        a += 1;
    }
        
    function getVal() public view returns(uint){
        return a;
    }
}