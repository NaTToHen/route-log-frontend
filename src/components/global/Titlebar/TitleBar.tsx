import logoApp from '../../../assets/img/logo-app.png'
import './TitleBar.scss'

import minimizar from '../../../assets/img/titleBar/mdi_minimize.svg'
import maximizar from '../../../assets/img/titleBar/mdi_maximize.svg'
import close from '../../../assets/img/titleBar/mdi_close.svg'

const TitleBar = () => {

  const minimizeWindow = () => {
    ipcRenderer.send('manualMinimize')
  }

  const maximizeWindow = () => {
    ipcRenderer.send('manualMaximize')
  }

  const closeWindow = () => {
    ipcRenderer.send('manualClose')
  }

  return (
    <div className="titlebar">
      <div>
        <img src={logoApp} width="20px" />
        <h1>Route Log - Gerenciamento de rotas</h1>
      </div>
      
      <nav className="titlebarNav">
        <img src={minimizar} alt="minimizar" onClick={() => { minimizeWindow() }}/>
        <img src={maximizar} alt="maximizar" onClick={() => { maximizeWindow() }}/>
        <img src={close} alt="fechar" onClick={() => { closeWindow() }}/>
      </nav>

    </div>
  )
}

export default TitleBar