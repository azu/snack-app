// LICENSE : MIT
"use strict";
import { Action } from "material-flux";
export var keys = {
    addSlackURL: Symbol("addSlackURL"),
    switchAccount: Symbol("switchAccount")
};
export default class AccountAction extends Action {
    addSlackURL(URL) {
        this.dispatch(keys.addSlackURL, URL);
    }

    switchAccount(account) {
        this.dispatch(keys.switchAccount, account);
    }
}