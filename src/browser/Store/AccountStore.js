// LICENSE : MIT
"use strict";
import { Store } from "material-flux";
import Storage from "./Storage";
import {keys} from "../Action/AccountAction";
export default class AccountStore extends Store {
    constructor(...args) {
        super(...args);
        this.storage = new Storage("slack-account");
        this.state = {
            accounts: this.storage.get("accounts") || []
        };
        this.register(keys.addSlackURL, this.addSlackURL);
    }

    addSlackURL(URL) {
        let match = URL.match(/^https?:\/\/(\w*?)\.slack\.com\/?$/);
        let [all, domain] = match;
        if (!domain) {
            return;
        }
        let alreadyInList = accounts.some(({name, URL}) => {
            return domain === name;
        });
        if (alreadyInList) {
            reutrn;
        }
        let accounts = this.state.accounts || [];
        accounts.push({
            name: domain,
            URL: URL
        });
        this.setState({
            accounts: accounts
        });
        this.storage.set("accounts", accounts);
    }
}