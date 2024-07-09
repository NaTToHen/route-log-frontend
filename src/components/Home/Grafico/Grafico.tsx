import { GraficoProps } from './Grafico.props'
import './Grafico.scss'

const Grafico = ({width, height, tituloGrafico}: GraficoProps) => {
  return (
    <div className='grafico' style={{width: width, height: height}}>
      <h1>{tituloGrafico}</h1>
    </div>
  )
}

export default Grafico