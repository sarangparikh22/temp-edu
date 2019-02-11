import React, { Component } from "react";
import { connect } from 'react-redux'

class BlockExplorer extends React.Component {
    constructor(props) {
      super(props);
      
    }

    render() {
        const transactionList= this.props.transactions.map((transaction) => {
            return (
                <li key={transaction.id}>
                    <div>
                        Transaction Hash - {transaction.transactionData.transactionHash}<br></br>
                        Transaction Details - {transaction.transactionData.details}
                    </div>
                </li>
            )
        });       
        return (
          <div>
             <h1>Welcome to Block Explorer</h1>
             <ul>
                 {transactionList}
             </ul>
          </div>
        );
      }
}

const mapStateToProps = state => {
    return { transactions: state.transactions };
};
  
export default connect(mapStateToProps, null)(BlockExplorer);