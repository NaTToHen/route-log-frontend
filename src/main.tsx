import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import TitleBar from './components/global/Titlebar/TitleBar'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TitleBar />
    <App />
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
