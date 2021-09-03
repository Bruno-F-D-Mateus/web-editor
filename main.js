const { app, BrowserWindow } = require('electron');

let mainWindow;

async function createWindow() {
    mainWindow = new BrowserWindow({
        widht: 800,
        height: 500,
        title: 'Editor de Texto',
        webPreferences: {
            contextIsolation: true
        }
    });
    await mainWindow.loadFile("src/pages/editor/index.html");
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate',function(){
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
});