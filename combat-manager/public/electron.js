const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');
const ipc = require('electron').ipcMain
const quickEncounterQueries = require('./quick_encounter_queries')
let mainWindow;

function createWindow() {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({width:1920, height:1080, webPreferences: {
    nodeIntegration: true
  }});

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();

  }
});

ipc.on('get-monsters', ( event, rate) => {
  quickEncounterQueries.getMonsters(mainWindow, event, rate)
})


ipc.on('create-player', (event, player) =>{
  quickEncounterQueries.createPlayer( mainWindow, player)
})

ipc.on('get-players', (event) =>{
  quickEncounterQueries.getPlayers(mainWindow)
})

ipc.on('get-player', (event, id) =>{
  quickEncounterQueries.getPlayer(mainWindow, id)
})

ipc.on('create-encounter', (encounter) =>{
  quickEncounterQueries.createEncounter(mainWindow, encounter)
})