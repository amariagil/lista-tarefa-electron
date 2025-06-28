const { contextBridge } = require('electron');

// processos

contextBridge.exposeInMainWorld('api', {
    verElectron: () => process.versions.electron
})

// manipulacao do DOM
