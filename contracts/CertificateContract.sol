pragma solidity ^0.5.0;

import "./RegistrationContract.sol";


contract CertificateContract {
    
    uint public test = 0;
    address issuerAddress;
    address recipientAddress;
        
    struct cert {
        uint256 certId;
        string certContent;
    }

    enum CertificateStages {
        AcceptingCertificateRequest,
        RequestCertificate,
        IssueCertificate,
        acceptCertificate
    }

    CertificateStages public stage = CertificateStages.AcceptingCertificateRequest;

    
    mapping (uint256 => cert) certificates;
    mapping (address => uint256) certificatesByIssuer;
    mapping (address => uint256) certificatesByRecipient;

    modifier isApproved(address _collegeAddress,address _studentAddress,address _regAddress){
        RegistrationContract regContract = RegistrationContract(_regAddress);
        require(_collegeAddress == regContract.getCollegeAddress());
        require(_studentAddress == regContract.getStudentAddress());
        require(2 < regContract.getStage());
        _;
    }
    modifier atStage(CertificateStages _stage) {
        require(stage == _stage);
        _;
    }
    modifier isStudent(address addr) {
        require(addr == recipientAddress);
        _;
    }
    modifier isCollege(address addr) {
        require(addr == issuerAddress);
        _;
    }
    modifier transitionNext(){
        _;
        nextStage();
    }
    function nextStage() internal {
        stage = CertificateStages(uint(stage) + 1);
    }


    constructor(address _collegeAddress) public{
        issuerAddress = _collegeAddress;
        recipientAddress = tx.origin;
    
    }


// issue certificate only to registered students in a particular college
    function issueCertificate() 
    atStage(CertificateStages.RequestCertificate)
    isCollege(tx.origin)
    transitionNext
    public{
     
    }
 // can be called by student of partical college
    function requestCertification(address _collegeAddress,address _regAddress) 
        atStage(CertificateStages.AcceptingCertificateRequest)
        isApproved(_collegeAddress,tx.origin,_regAddress) 
        transitionNext
    public{
     
    }

// can be accepted by student
    function acceptCertificate() 
        atStage(CertificateStages.IssueCertificate)
        isStudent(tx.origin)
        transitionNext
        public{
    
    }    

    function getRegistrationStatus() public view returns (string memory) {
        if(CertificateStages.AcceptingCertificateRequest == stage){
            return "AcceptingCertificateRequest";
            }
        if(CertificateStages.RequestCertificate == stage){
            return "RequestCertificate";
        }
        if(CertificateStages.IssueCertificate == stage){
            return "IssueCertificate";
        }
        if(CertificateStages.acceptCertificate == stage){
            return "acceptCertificate";
        }
    }

}