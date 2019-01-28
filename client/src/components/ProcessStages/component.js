import React, { Component } from "react";
import PropTypes from "prop-types";
import Uppernav from "../UpperNav/component";
import Carousel from "../Carousel/component";
import Well1 from "./Well1/component";
import Well2 from "./Well2/component";
import getWeb3 from "../../utils/getWeb3";
import SimpleStorageContract from "../../contracts/SimpleStorage.json";
import RegistrationAndCertificateContractFactory from "../../contracts/RegistrationAndCertificateContractFactory.json";
import RegistrationContract from "../../contracts/RegistrationContract.json";
import CertificateContract from "../../contracts/CertificateContract.json";
//import "./conveyance.css";

class ProcessStages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: true /* Property In Process Hide/Show flag */
    };
  }
  state = {};

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork =
        RegistrationAndCertificateContractFactory.networks[networkId];
      const instance = new web3.eth.Contract(
        RegistrationAndCertificateContractFactory.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    // await contract.methods.set("R", 5).send({ from: accounts[0] });
    const result = await contract.methods.getRegistrationStatus(
      "0x9CC53532815ccdE2d97f09571Bebd4a87a100b5E",
      "0x99bA8eB7AcD2b9D4F65F7e36AB026ceDb57FB979"
    );
    console.log(result);

    // Update state with the result.
    // this.setState({ storageValue: response });
  };

  render() {
    var stage1 = "Request Registration";
    var stage2 = "Verify Student Profile";
    var stage3 = "Approve Registration";
    var stage4 = "Accept Registration";
    var stage5 = "Request Certification";
    var stage6 = "Verify Certificate";
    var stage7 = "Approve Certification";
    var stage8 = "Accept Certification";

    var index1 = "1";
    var index2 = "2";
    var index3 = "3";
    var index4 = "4";
    var index5 = "5";
    var index6 = "6";
    var index7 = "7";
    var index8 = "8";

    var status1 = "done";
    var status2 = "btn-primary";
    var status3 = "primary";
    var status4 = "primary";
    var status5 = "primary";
    var status6 = "primary";
    var status7 = "primary";
    var status8 = "primary";

    return (
      <div>
        <Uppernav />
        <Carousel />
        <br />
        <br />
        <Well1 />
        <br />
        <br />
        <div className="stepwizard">
          <div className="stepwizard-row">
            <Well2 stage={stage1} index={index1} status={status1} />
            <Well2 stage={stage2} index={index2} status={status2} />
            <Well2 stage={stage3} index={index3} status={status3} />
            <Well2 stage={stage4} index={index4} status={status4} />
            <Well2 stage={stage5} index={index5} status={status5} />
            <Well2 stage={stage6} index={index6} status={status6} />
            <Well2 stage={stage7} index={index7} status={status7} />
            <Well2 stage={stage8} index={index8} status={status8} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProcessStages;
