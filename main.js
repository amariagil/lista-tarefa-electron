const {app, BrowserWindow, nativeTheme } = require('electron');
const path = require('node:path');
 // Janela Principal
const createWindow = () => {
    nativeTheme.themeSource = 'light';
    const win = new BrowserWindow({
        width: 800,
        height: 500,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('src/views/index.html');
    win.removeMenu();
}

// Janela da listinha to-do
const listinhaWindow = () => {
    const listinha = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false
    });
    listinha.loadFile('src/views/dashboarda.html');
    listinha.removeMenu();
}
app.whenReady().then(() => {
    createWindow();
    //listinhaWindow();
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})


/*
const template = [
    {
        label: 'Arquivo'
    },
    {
        label: 'Exibir'
    },
    {
        label: 'Ajuda'
    }
]*/
