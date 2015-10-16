"use strict";
import React from "react";
export class SideAccountItem extends React.Component {
    render() {
        return <li className="SideAccountItem">
            {this.props.name}
        </li>
    }
}
export default class SideAccountList extends React.Component {
    render() {
        let list = this.props.accounts.map(({name, URL}) => {
            return <SideAccountItem name={name} key={name}/>
        });
        return <div className="SideAccountList">
            <ul>
                {list}
            </ul>
        </div>

    }
}