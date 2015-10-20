// LICENSE : MIT
"use strict";
import React from "react";
export default class SlackWebView extends React.Component {
    render() {
        console.log(this.props.url);
        if (this.props.url == null) {
            return <div className="SlackWebView">
            </div>;
        }
        return <div className="SlackWebView">
            <webview ref="slack" src={this.props.url} httpreferrer={this.props.url}
                     autosize="on" height="100%" width="100%" minwidth="576" minheight="432"/>
        </div>
    }
}