pragma solidity ^0.5.1;
    contract RegistrationContract {
        address studentAddress;
        address collegeAddress;
        
        struct StudentInfo {
            string collegeRegNumber;
            string collegeEmailId;
            uint collegeDoJ;
            uint collegeDateOfPassing;
        }
        
        StudentInfo studentInfo;
         
          constructor(address _studentAddress, address _collegeAddress, string memory collegeRegNumber, string memory collegeEmailId, uint collegeDoJ, uint collegeDateOfPassing) public{
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
        
        
        function verifyStudentProfile() public atStage(Stages.RequestforRegistration) isCollege(msg.sender) transitionNext
        {
            
        }
        
        function approveRegistration() public atStage(Stages.VerifyStudentProfile) isCollege(msg.sender) transitionNext
        {
            
        }
        
        function acceptRegistration() public atStage(Stages.ApproveRegistration) isStudent(msg.sender) transitionNext
        {
            
        }
    }
