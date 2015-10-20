// LICENSE : MIT
"use strict";
import React from "react";
export default class AddAccountButton extends React.Component {
    addSlackURL(event) {
        event.preventDefault();
        var url = this.refs.inputURL.value;
        this.props.addSlackURL(url);
    }

    render() {
        return <div className="AddAccountButton">
            <form onSubmit={this.addSlackURL.bind(this)}>
                <input type="text" ref="inputURL"/>
                <input type="submit" value="Add Slack URL"/>
            </form>
        </div>
    }
}