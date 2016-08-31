// LICENSE : MIT
"use strict";
var electron = require("electron");
var remote = electron.remote;
var app = remote.app;
var jetpack = require('fs-jetpack');
var path = require("path");
var mkdirp = require("mkdirp").sync;
function getUserDir() {
    return app.getPath("userData");
}
module.exports = function(webView) {
    var userDefinedDir = getUserDir();
    var jsDir = path.join(userDefinedDir, "js");
    var cssDir = path.join(userDefinedDir, "css");
    mkdirp(jsDir);
    mkdirp(cssDir);

    jetpack.find(jsDir, {
        matching: '*.js'
    }).forEach(function(jsFilePath) {
        var code = jetpack.read(jsFilePath);
        // gesture enable
        webView.executeJavaScript(code, true);
    });
    // css
    jetpack.find(cssDir, {
        matching: '*.css'
    }).forEach(function(jsFilePath) {
        var code = jetpack.read(jsFilePath);
        webView.insertCSS(code);
    });
};