var RACCFactory = artifacts.require(
  "./RegistrationAndCertificateContractFactory.sol"
);

module.exports = function(deployer) {
  deployer.deploy(RACCFactory);
};
