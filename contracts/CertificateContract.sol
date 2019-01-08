pragma solidity ^0.5.1;

contract CertificateContract {
struct cert {
    uint256 certId;
    address issuerAddress;
    address recipientAddress;
    string certContent;
}

enum CertificateStages {
        AcceptingCertificateRequest,
        RequestCertificate,
        VerifyProfile,
        IssueCertificate,
        acceptCertificate
}
    
mapping (uint256 => cert) certificates;
mapping (address => uint256) certificatesByIssuer;
mapping (address => uint256) certificatesByRecipient;

// issue certificate only to registered students in a particular college
 function issueCertificate() public 
 {
        
 }
 
 // can be called by student of partical college
 fuction requestCertification(address collegeAddress){
     
 }

// can be accepted by student
function acceptCertificate(uint256 certId) {
    
}    

}
