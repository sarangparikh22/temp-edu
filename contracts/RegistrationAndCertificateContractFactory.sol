pragma solidity ^0.5.1;

contract RegistrationAndCertificateContractFactory {
    
    mapping(address => mapping(address => address)) collegeStudentRegistrationContracts;
    mapping(address => mapping(address => address)) collegeStudentCertificateContracts;
    
    
    function createRegistrationContract() public{
        address newRegistrationContract = new RegistrationContract();
    }
    
    function getRegistrationContract(address studentAddress, address collegeAddress) public view returns (address) {
            collegeStudentRegistrationContracts[collegeAddress][studentAddress];
    }
    
    function createCertificateContract() public{
        address newCertificateContract = new CertificateContract();
    }
    
    function getCertificateContract(address studentAddress, address collegeAddress) public view returns (address) {
            collegeStudentCertificateContracts[collegeAddress][studentAddress];
    }
    
}
