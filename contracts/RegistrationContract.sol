pragma solidity ^0.5.1;
contract RegistrationContract {
    
    mapping(address => address[]) collegeStudentsRegistration;
    mapping(address => address[]) studentCollegesRegistration;
    
    
    enum Stages {
        AcceptingRegistrationRequests,
        RequestforRegistration,
        VerifyStudentProfile,
        ApproveRegistration,
        AcceptRegistration
    }
    
    Stages public stage = Stages.AcceptingRegistrationRequests;
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
    
    function requestForRegistration() public atStage(Stages.AcceptingRegistrationRequests) transitionNext
    {
        
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