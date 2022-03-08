// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


const { ipcRenderer } = require('electron')

const newWindowBtn = document.getElementById('new-window')
newWindowBtn.addEventListener('click', (event) => {
    console.log(999999)
    ipcRenderer.send('addBWindow');
  })