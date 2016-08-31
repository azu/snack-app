// LICENSE : MIT
"use strict";
var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var path = require("path");
function launchRegisterView() {
    var mainWindow = new BrowserWindow({width: 400, height: 400});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.webContents.on('did-finish-load', function() {
    });
    mainWindow.maximize();
    mainWindow.on('closed', function() {
        mainWindow = null;
        app.quit();
    });
}
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    launchRegisterView();
});
