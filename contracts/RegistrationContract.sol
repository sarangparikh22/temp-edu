pragma solidity ^0.5.1;
    contract RegistrationContract {
        
        address studentAddress;
        address collegeAddress;
        
        struct StudentInfo {
            string collegeRegId;
            string collegeEmailId;
            uint dateOfJoining;
            uint dateOfPassing;
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
         // This modifier goes to the next stage
        // after the function is done.
        modifier transitionNext()
        {
            _;
            nextStage();
        }
        function nextStage() internal {
            stage = Stages(uint(stage) + 1);
        }
        
        constructor(address _studentAddress, address _collegeAddress, string collegeRegNumber, string collegeEmailId, uint collegeDoJ, uint collegeDateOfPassing){
            studentAddress = _studentAddress;
            collegeAddress = _collegeAddress;
            studentInfo = new studentInfo(collegeRegNumber, collegeEmailId, collegeDoJ, collegeDateOfPassing);
            
        }
        
        function getRegistrationStatus() public view returns (string) {
            return state;
        }
        
        function verifyStudentProfile() public atStage(Stages.RequestforRegistration) transitionNext
        {
            
        }
        
        function approveRegistration() public atStage(Stages.VerifyStudentProfile) transitionNext
        {
            
        }
        
        function acceptRegistration() public atStage(Stages.ApproveRegistration) transitionNext
        {
            
        }
    }
