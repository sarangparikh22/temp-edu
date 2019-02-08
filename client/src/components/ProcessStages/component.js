import React, { Component } from "react";
import PropTypes from "prop-types";
import Uppernav from "../UpperNav/component";
import Carousel from "../Carousel/component";
import Well1 from "./Well1/component";
import Well2 from "./Well2/component";
import TabBar from "../SectionBar/component";
import IssuerProfile from "./IssuerProfile/component";
import UploadCertificate from "./Upload/component";
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
    const {
      accounts,
      contract,
      astate,
      bstate,
      index11,
      index21,
      index31,
      index41,
      index51,
      index61,
      index71,
      index81
    } = this.state;

    const a = await contract.methods
      .getRegistrationStatus(
        "0x9cc53532815ccde2d97f09571bebd4a87a100b5e",
        "0x99ba8eb7acd2b9d4f65f7e36ab026cedb57fb979"
      )
      .call();
    // console.log("Value of a is : ", a);
    this.setState({ astate: a });
    console.log("Status is ", this.state.astate);

    /* const b = await contract.methods
       .getCertificationStatus()
       .call();
     // console.log("Value of a is : ", a);
     this.setState({ bstate: b });
     console.log("Status is ", this.state.bstate); */

    switch (a) {

      case "RequestRegistration":
        this.setState({
          index11: "btn-success",
          index21: "btn-primary",
          index31: "btn-default",
          index41: "btn-default"
        });
        break;

      case "VerifyStudentProfile":
        this.setState({
          index11: "btn-success",
          index21: "btn-success",
          index31: "btn-primary",
          index41: "btn-default"
        });
        break;

      case "ApproveRegistration":
        this.setState({
          index11: "btn-success",
          index21: "btn-success",
          index31: "btn-success",
          index41: "btn-primary"
        });
        break;

      case "AcceptRegistration":
        this.setState({
          index11: "btn-success",
          index21: "btn-success",
          index31: "btn-success",
          index41: "btn-success"
        });
        break;

      case "AcceptingCertificateRequest":
        this.setState({
          index51: "btn-success",
          index61: "btn-primary",
          index71: "btn-default",
          index81: "btn-default"
        })
    }

    /* switch (b) {
 
       case "RequestRegistration":
         this.setState({
           index51: "btn-success",
           index61: "btn-primary",
           index71: "btn-default",
           index81: "btn-default"
         });
         break;
 
       case "VerifyStudentProfile":
         this.setState({
           index51: "btn-success",
           index61: "btn-success",
           index71: "btn-primary",
           index81: "btn-default"
         });
         break;
 
       case "ApproveRegistration":
         this.setState({
           index51: "btn-success",
           index61: "btn-success",
           index71: "btn-success",
           index81: "btn-primary"
         });
         break;
 
       case "AcceptRegistration":
         this.setState({
           index51: "btn-success",
           index61: "btn-success",
           index71: "btn-success",
           index81: "btn-success"
         });
         break;
     } */

    /* if (a == "AcceptRegistration") {
       this.setState({
         index11: "btn-success",
         index21: "btn-success",
         index31: "btn-success",
         index41: "btn-success"
       });
     } else {
       if (a == "ApproveRegistration") {
         this.setState({
           index11: "btn-success",
           index21: "btn-success",
           index31: "btn-success",
           index41: "btn-primary"
         });
       } else {
         if (a == "VerifyStudentProfile") {
           this.setState({
             index11: "btn-success",
             index21: "btn-success",
             index31: "btn-primary",
             index41: "btn-default"
           });
         } else {
           if (a == "RequestRegistration") {
             this.setState({
               index11: "btn-success",
               index21: "btn-primary",
               index31: "btn-default",
               index41: "btn-default"
             });
           }
         }
       }
     } */

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

    var stage_color = "success";

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
    var status3 = "btn-default";
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
        <br />
        <br />

        <div className="container">
          <div className="stepwizard">
            <div className="stepwizard-row">
              <Well2
                stage={stage1}
                index={index1}
                status={this.state.index11}
                stage_color={stage_color}
              />
              <Well2
                stage={stage2}
                index={index2}
                status={this.state.index21}
                stage_color="default"
              />
              <Well2
                stage={stage3}
                index={index3}
                status={this.state.index31}
                stage_color="default"
              />
              <Well2
                stage={stage4}
                index={index4}
                status={this.state.index41}
                stage_color="default"
              />
              <Well2
                stage={stage5}
                index={index5}
                status={status5}
                stage_color="default"
              />
              <Well2
                stage={stage6}
                index={index6}
                status={status6}
                stage_color="default"
              />
              <Well2
                stage={stage7}
                index={index7}
                status={status7}
                stage_color="default"
              />
              <Well2
                stage={stage8}
                index={index8}
                status={status8}
                stage_color="default"
              />
            </div>
          </div>
          <br />
          <br />
          <TabBar />
          <br />
          <IssuerProfile />
          <br />
          <br />
          <UploadCertificate />
          <br />
          <br />
          <div>
            <h2> Status : {this.state.astate}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ProcessStages;
