import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";

import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import uppernav from "../src/components/UpperNav/component";
import student from "../src/components/Register/Student/component";
import verifier from "../src/components/Register/Verifier/component";
import issuer from "../src/components/Register/Issuer/component";
import conveyance from "../src/components/Conveyance/component";
import SLanding from "../src/components/Landing/Student/component";
import "./App.css";

class App extends Component {
  /* state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
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
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  }; */

  render() {
    /*  if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    } */
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/home" component={uppernav} />
            <Route path="/student" component={student} />
            <Route path="/verifier" component={verifier} />
            <Route path="/issuer" component={issuer} />
            <Route path="/process" component={conveyance} />
            <Route path="/side" component={SLanding} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
