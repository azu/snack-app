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
            currentAccount: null,
            accounts: this.storage.get("accounts") || []
        };
        this.register(keys.addSlackURL, this.addSlackURL);
        this.register(keys.switchAccount, this.switchAccount);
    }

    switchAccount(account) {
        this.setState({
            currentAccount: account
        });
    }

    addSlackURL(URL) {
        let match = URL.match(/^https?:\/\/(\w*?)\.slack\.com\/?$/);
        let [all, domain] = match;
        if (!domain) {
            return;
        }
        let accounts = this.state.accounts || [];
        let alreadyInList = accounts.some(({name, URL}) => {
            return domain === name;
        });
        if (alreadyInList) {
            return;
        }
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