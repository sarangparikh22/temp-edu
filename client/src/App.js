import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import uppernav from "../src/components/UpperNav/component";
import student from "../src/components/Register/Student/component";
import verifier from "../src/components/Register/Verifier/component";
import issuer from "../src/components/Register/Issuer/component";
import conveyance from "../src/components/Conveyance/component";
import pr from "../src/components/ProcessStages/component";
import iTest from "../src/components/Certificate/UploadC/component";
import BlockExplorer from "../src/components/BlockExplorer/component";

import "./App.css";

class App extends Component {
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/home" component={uppernav} />
            <Route exact path="/student" component={student} />
            <Route exact path="/verifier" component={verifier} />
            <Route exact path="/issuer" component={issuer} />
            <Route exact path="/studentprocess" component={conveyance} />
            <Route exact path="/issuerprocess" component={pr} />
            <Route exact path="/ipfsTest" component={iTest} />
            <Route path="/" component={BlockExplorer} />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
