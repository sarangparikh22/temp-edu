import React, { Component } from "react";
import { connect } from 'react-redux'
import "./styles.css";

class BlockExplorer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const transactionList = this.props.transactions.map((transaction) => {
            return (
                <li key={transaction.id}>
                    <div>
                        Transaction Hash - {transaction.transactionData.transactionHash}<br></br>
                        Block Number - {transaction.transactionData.blocknumber}<br></br>
                        Transaction Details - {transaction.transactionData.details}
                    </div>
                </li>
            )
        });
        return (
            <div className="container">
                <div className="bcExplorer">
                    <h1>Welcome to Block Explorer</h1>
                    <ul>
                        {transactionList}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { transactions: state.transactions };
};

export default connect(mapStateToProps, null)(BlockExplorer);