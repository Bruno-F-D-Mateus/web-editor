const { app, BrowserWindow } = require('electron');

let mainWindow;

async function createWindow() {
    mainWindow = new BrowserWindow({
        widht: 800,
        height: 500,
        title: 'Editor de Texto',
        show: false,
        webPreferences: {
            contextIsolation: true
        }
    });

    await mainWindow.loadFile("src/pages/editor/index.html");
    mainWindow.show();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate',function(){
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
});