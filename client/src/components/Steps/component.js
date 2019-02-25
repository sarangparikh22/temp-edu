import React, { Component } from 'react';
import Well2 from "../../components/ProcessStages/Well2/component";
import getWeb3 from "../../utils/getWeb3";
import RegistrationAndCertificateContractFactory from "../../contracts/RegistrationAndCertificateContractFactory.json";
class StepsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
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


        switch (a) {

            case "RequestforRegistration":
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

            default:
                this.setState({
                    index11: "btn-default",
                    index21: "btn-default",
                    index31: "btn-default",
                    index41: "btn-default"
                })
        }

        const b = await contract.methods
            .getCertificationStatus(
                "0x9cc53532815ccde2d97f09571bebd4a87a100b5e",
                "0x99ba8eb7acd2b9d4f65f7e36ab026cedb57fb979"
            )
            .call();
        console.log("Value of b is : ", b);
        this.setState({ bstate: b });
        console.log("Status is ", this.state.bstate);

        switch (b) {

            case "AcceptingCertificateRequest":
                this.setState({
                    index51: "btn-success",
                    index61: "btn-primary",
                    index71: "btn-default",
                    index81: "btn-default"
                });
                break;

            case "RequestCertificate":
                this.setState({
                    index51: "btn-success",
                    index61: "btn-success",
                    index71: "btn-primary",
                    index81: "btn-default"
                });
                break;

            case "IssueCertificate":
                this.setState({
                    index51: "btn-success",
                    index61: "btn-success",
                    index71: "btn-success",
                    index81: "btn-primary"
                });
                break;

            case "acceptCertificate":
                this.setState({
                    index51: "btn-success",
                    index61: "btn-success",
                    index71: "btn-success",
                    index81: "btn-success"
                });
                break;

            default:
                this.setState({
                    index51: "btn-default",
                    index61: "btn-default",
                    index71: "btn-default",
                    index81: "btn-default"
                })
        }

    };

    render() {
        var stage1 = "Request Registration";
        var stage2 = "Verify Student Profile";
        var stage3 = "Approve Registration";
        var stage4 = "Accept Registration";
        var stage5 = "Start Certification Request";
        var stage6 = "Request Certificate";
        var stage7 = "Issue Certification";
        var stage8 = "Accept Certification";

        //  var stage_color = "success";

        var index1 = "1";
        var index2 = "2";
        var index3 = "3";
        var index4 = "4";
        var index5 = "5";
        var index6 = "6";
        var index7 = "7";
        var index8 = "8";

        /*  var status1 = "done";
          var status2 = "btn-primary";
          var status3 = "btn-default";
          var status4 = "primary";
          var status5 = "primary";
          var status6 = "primary";
          var status7 = "primary";
          var status8 = "primary"; */
        return (
            <div className="container">
                <div className="stepwizard">
                    <div className="stepwizard-row">
                        <Well2
                            stage={stage1}
                            index={index1}
                            status={this.state.index11}
                            stage_color="default"
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
                            status={this.state.index51}
                            stage_color="default"
                        />
                        <Well2
                            stage={stage6}
                            index={index6}
                            status={this.state.index61}
                            stage_color="default"
                        />
                        <Well2
                            stage={stage7}
                            index={index7}
                            status={this.state.index71}
                            stage_color="default"
                        />
                        <Well2
                            stage={stage8}
                            index={index8}
                            status={this.state.index81}
                            stage_color="default"
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default StepsComponent;