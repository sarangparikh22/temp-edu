var RegistrationContract = artifacts.require(
    "./RegistrationContract.sol"
  );
  
  module.exports = function(deployer) {
    deployer.deploy(RegistrationContract);
  };
  