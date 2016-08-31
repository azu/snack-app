// LICENSE : MIT
"use strict";
import React from "react";
import Growl from "./webview/growl";
export default class SlackWebView extends React.Component {
    componentDidUpdate() {
        let slack = this.refs.slack;
        if (!slack) {
            return;
        }
        console.log(slack);
        slack.addEventListener('new-window', function (e) {
            require('shell').openExternal(e.url);
        });
        slack.addEventListener("did-finish-load", function () {
            console.log("load");
            // slack.executeJavaScript(`window.Notification = ${Growl}`);
        });
    }

    render() {
        if (this.props.url == null) {
            return <div className="SlackWebView">
            </div>;
        }
        return <div className="SlackWebView">
            <webview ref="slack"
                     src={this.props.url}
                     httpreferrer={this.props.url}
                     allowpopups
                     autosize="on" height="100%" width="100%" minwidth="576" minheight="432"/>
        </div>
    }
}