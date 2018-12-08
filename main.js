const electron = require('electron');
const { app, Tray, Menu, BrowserWindow } = electron;

app.on('ready', () => {
    const tray = new Tray(`${__dirname}/public/favicon.png`);
    // tray.setToolTip('Esta é uma aplicação Electron.');
    // const contextMenu = Menu.buildFromTemplate(menuTemplate);
    // tray.setContextMenu(contextMenu);

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        // frame: false,
        resizable: false,
        show: false,
        icon: `${__dirname}/public/favicon.png`,
    });

    tray.on('click', () => {
        if (mainWindow.isVisible()) {
            mainWindow.hide();
        } else {
            mainWindow.show();
        }
    })

    mainWindow.loadURL(`file:${__dirname}/public/index.html`);
})

// const menuTemplate = [
//     {
//         label: 'Teste',
//         click: () => {
//             console.log('Clickou em Teste caboclo');
//         },
//     },
// ];