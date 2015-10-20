// LICENSE : MIT
"use strict";
import React from "react";
import ReactDOM from "react-dom";
import SideAccountList from "./components/SideAccountList"
import AddAccountButton from "./components/AddAccountButton"
import SlackWebView from "./components/SlackWebView"
import AppContext from "./AppContext";
const context = new AppContext();

const {AccountAction} = context;
const addSlackURL = AccountAction.addSlackURL.bind(AccountAction);
class App extends React.Component {
    constructor(...args) {
        super(...args);
        context.AccountStore.onChange(() => {
            this.updateState();
        })
    }

    updateState() {
        this.setState(context.AccountStore.state);
    }

    componentWillMount() {
        this.updateState();
    }

    render() {
        var current = this.state.currentAccount;
        return <div className="App">
            <SideAccountList accounts={this.state.accounts}
                             switchAccount={AccountAction.switchAccount.bind(AccountAction)}/>
            <AddAccountButton addSlackURL={addSlackURL}/>
            <SlackWebView url={current ? current.URL : null}/>
        </div>
    }
}
ReactDOM.render(<App />, document.getElementById("main"));
