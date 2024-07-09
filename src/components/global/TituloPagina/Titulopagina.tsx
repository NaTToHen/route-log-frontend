import './Titulopagina.scss'
import { TituloPaginaProps } from './TituloPagina.props'

const TituloPagina = ({ pagina }: TituloPaginaProps) => {
  return (
    <h1 className='tituloPagina'>{pagina}</h1>
  )
}

export default TituloPagina