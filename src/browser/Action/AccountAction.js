// LICENSE : MIT
"use strict";
import { Action } from "material-flux";
export var keys = {
    addSlackURL: Symbol("addSlackURL")
};
export default class AccountAction extends Action {
    addSlackURL(URL) {
        this.dispatch(keys.addSlackURL, URL);
    }
}