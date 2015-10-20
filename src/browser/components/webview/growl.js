// LICENSE : MIT
"use strict";
export default class Growl {
    constructor(title, options) {
        this.title = title;
        this.body = options.body;
        this.icon = options.icon;
        this.tag = options.tag;
        console.log(title, options);
    }
}