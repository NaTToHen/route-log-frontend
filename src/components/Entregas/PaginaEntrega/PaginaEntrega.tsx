import "./PaginaEntrega.scss"
import "../../../index.scss"

import { PaginaEntregaProps } from "./PaginaEntrega.props"

import Menu from "../../global/Menu/Menu"
import TituloPagina from "../../global/TituloPagina/Titulopagina"

const PaginaEntrega = ({}: PaginaEntregaProps) => {
  return (
    <>
      <Menu />
      <TituloPagina pagina={"Nome da entrega"} />

      <div className='containerApp'>
        <section className="descEntrega">
          <div className="responsavel">
            <h1>Responsável</h1>
            <h2>Esclides Rovertinho</h2>
          </div>
          
          <div className="acoesEntrega">
            <h1 className="statusEntrega">Em andamento</h1>
            <button>EDITAR ENTREGA</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default PaginaEntrega