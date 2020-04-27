const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');
const ipc = require('electron').ipcMain

let mainWindow;

function createWindow() {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({width:800, height:500, webPreferences: {
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

const sqlite3 = require('sqlite3')

ipc.on('get-monsters', (event, rate) => {
  console.log(rate)
  let db = new sqlite3.Database('D:\\unihunter\\combat-manager\\public\\combat_db', (error) => {
    if(error){
      return console.error(error.message) 
    }
    console.log("Connected")
  })

  db.all("SELECT * FROM monster WHERE monster.challenge_rating = " + rate, [], (error, rows) => {
    if(error){
      console.error(error.message)
    }
    rows.forEach((row) =>{

    })
    mainWindow.webContents.send("return-monsters", rows)
  })
})