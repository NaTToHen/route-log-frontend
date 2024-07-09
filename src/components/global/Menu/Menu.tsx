import "./Menu.scss";

import { useState } from "react";

import logoApp from "../../../assets/img/logoMenu.svg";

import pesquisa from "../../../assets/img/menuSup/ion_search.svg";
import home from "../../../assets/img/menuSup/ion_home.svg";
import config from "../../../assets/img/menuSup/ion_settings.svg";

import humburger from "../../../assets/img/menuLat/humberger.svg";

import entregas from "../../../assets/img/menuLat/mdi_truck.svg";
import produtos from "../../../assets/img/menuLat/ion_cube.svg";
import motoristas from "../../../assets/img/menuLat/fa6-solid_truck-front.svg";
import ajuda from "../../../assets/img/menuLat/material-symbols_help.svg";
import rotas from "../../../assets/img/menuLat/fa-solid_route.svg";
import relatorios from "../../../assets/img/menuLat/ion_document-attach.svg";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="menuSuperior">
        <img className="logo" src={logoApp} width="150px" />

        <nav className="navMenuSuperior">
          <a>
            <img src={pesquisa} />
          </a>
          <a href="/dashboard">
            <img src={home} />
          </a>
          <a href="/config">
            <img src={config} />
          </a>
        </nav>
      </div>

      <div className="menuLateral" onMouseEnter={() => { setOpenMenu(true) }} onMouseLeave={() => { setOpenMenu(false) }}>
        <img className="humburger" src={humburger} onClick={() => { setOpenMenu(!openMenu) }} />

        <nav className="navMenuLateral" id="navMenuLateral">
          <a className="menuDesktop" href="/dashboard">
            <img src={home} />
          </a>
          <a className="menuDesktop" href="/entregas">
            <img src={entregas} />
          </a>
          <a className="menuDesktop" href="/produtos">
            <img src={produtos} />
          </a>
          <a className="menuDesktop" href="/motoristas">
            <img src={motoristas} />
          </a>
          <a className="menuDesktop" href="/ajuda">
            <img src={ajuda} />
          </a>
          <a className="menuDesktop" href="/rotas">
            <img src={rotas} />
          </a>
          <a className="menuDesktop" href="/relatorios">
            <img src={relatorios} />
          </a>
        </nav>
      </div>
    </>
  )
}

export default Menu