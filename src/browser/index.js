// LICENSE : MIT
"use strict";
import React from "react";
import ReactDOM from "react-dom";
import SideAccountList from "./components/SideAccountList"
import AddAccountButton from "./components/AddAccountButton"
import SlackWebView from "./components/SlackWebView"
import AppContext from "./AppContext";
const context = new AppContext();
class App extends React.Component {
    constructor(...args) {
        super(...args);
        context.AccountStore.onChange(() => {
            this.updateState();
        })
    }

    updateState(){
        this.setState(context.AccountStore.state);
    }

    componentWillMount() {
        this.updateState();
    }

    render() {
        var current = this.state.accounts[0];
        return <div className="App">
            <SideAccountList accounts={this.state.accounts}/>
            <AddAccountButton addSlackURL={context.AccountAction.addSlackURL.bind(context.AccountAction)}/>
            <SlackWebView url={current ? current.URL : null}/>
        </div>
    }
}
ReactDOM.render(<App />, document.getElementById("main"));
