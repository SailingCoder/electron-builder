// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.


const { ipcRenderer } = require('electron')
const path = require('path')

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

  const newWindowBtn = document.getElementById('new-window')

  newWindowBtn.addEventListener('click', (event) => {
    console.log(999999)
    ipcRenderer.send('addBWindow');
  })
  
})