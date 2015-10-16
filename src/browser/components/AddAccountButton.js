// LICENSE : MIT
"use strict";
import React from "react";
export default class AddAccountButton extends React.Component {
    addSlackURL(event) {
        var url = this.refs.inputURL.value;
        this.props.addSlackURL(url);
        event.preventDefault();
    }

    render() {
        return <div className="AddAccountButton">
            <form onSubmit={this.addSlackURL.bind(this)}>
                <input type="text" ref="inputURL" placeholder="https://<your-team>.slack.com/"/>
                <button onClick={this.addSlackURL.bind(this)}>Add Slack URL</button>
            </form>
        </div>
    }
}