"use strict";
import React from "react";
export class SideAccountItem extends React.Component {
    switchAccount(event) {
        event.preventDefault();
        this.props.switchAccount({name: this.props.name, URL: this.props.URL});
    }

    render() {
        return <li className="SideAccountItem">
            <a href={this.props.URL} onClick={this.switchAccount.bind(this)}>{this.props.name}</a>
        </li>
    }
}
export default class SideAccountList extends React.Component {
    render() {
        let list = this.props.accounts.map(({name, URL}) => {
            return <SideAccountItem switchAccount={this.props.switchAccount}
                                    URL={URL}
                                    name={name}
                                    key={name}/>
        });
        return <div className="SideAccountList">
            <ul>
                {list}
            </ul>
        </div>

    }
}