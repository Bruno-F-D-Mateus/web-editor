const { app, BrowserWindow } = require('electron');

let mainWindow;

async function createWindow(){
    mainWindow = new BrowserWindow({
        widht: 800,
        height: 500
    });
    
    await mainWindow.loadFile("src/pages/editor/index.html");
}

app.whenReady().then(createWindow);
