// LICENSE : MIT
"use strict";
import { Context } from "material-flux"
import AccountAction from "./Action/AccountAction";
import AccountStore from "./Store/AccountStore";
export default class AppContext extends Context {
    constructor() {
        super();
        this.AccountAction = new AccountAction(this);
        this.AccountStore = new AccountStore(this);
    }
}