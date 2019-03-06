import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Uppernav from "../src/components/UpperNav/component";
import student from "../src/components/Register/Student/component";
import verifier from "../src/components/Register/Verifier/component";
import issuer from "../src/components/Register/Issuer/component";
import Conveyance from "../src/components/Conveyance/component";
import pr from "../src/components/ProcessStages/component";
import iTest from "../src/components/Certificate/UploadC/component";
import BlockExplorer from "../src/components/BlockExplorer/component";

import "./App.css";

const auth = {
  isToken: false
}

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props)=>(
    auth.isToken ? <Component {...props} /> : <Redirect to="/home" />
  )} />
)

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      token: ""
    }
  }
  componentWillMount(){
    let data = localStorage.getItem('token');
    if(data){
      auth.isToken = true;
      this.setState(()=>{
        return{
          token: data
        }
      })
    }
  }
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/home" component=
            {() => <Uppernav token={this.state.token} />} />
            <Route exact path="/student" component={student} />
            <Route exact path="/verifier" component={verifier} />
            <Route exact path="/issuer" component={issuer} />
            <PrivateRoute path="/studentprocess" component={() => 
              <Conveyance />
            } />
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
