const { app, BrowserWindow } = require('electron');

let mainWindow;

async function createWindow(){
    mainWindow = new BrowserWindow({
        widht: 800,
        height: 500
    });
}

app.whenReady().then(createWindow);
