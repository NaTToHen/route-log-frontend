import Menu from '../global/Menu/Menu'
import TituloPagina from '../global/TituloPagina/Titulopagina'
import './Home.scss'
import '../../index.scss'
import Grafico from './Grafico/Grafico'

const Home = () => {

  return (
    <>
    <Menu />
    <TituloPagina pagina='Dashboard' />

    <div className='containerApp'>
      <section className='atalhos'>
        <a href="/entregas">TODAS AS ENTREGAS</a>
        <a href="/produtos">TODOS OS PRODUTOS</a>
        <a href="/motoristas">TODOS OS MOTORISTAS</a>
        <a href="/rotas">TODAS AS ROTAS</a>
        <a href="/relatorios">RELATÓRIOS</a>
        <a href='/ajuda'>AJUDA</a>
      </section>

      <section className='containerGraficos'>
        <Grafico
        width={550}
        height={320}
        tituloGrafico="Entregas realizadas"
        />

        <Grafico
        width={550}
        height={320}
        tituloGrafico="Produtos transportados"
        />

        <Grafico
        width={550}
        height={320}
        tituloGrafico="Capital movimentada"
        />

        <Grafico
        width={550}
        height={320}
        tituloGrafico="Quantidade de Entregas por Rota"
        />

        <Grafico
        width={550}
        height={320}
        tituloGrafico="Quantidade de Entregas por Rota"
        />

        <Grafico
        width={550}
        height={320}
        tituloGrafico="Quantidade de Entregas por Rota"
        />
      </section>
    </div>
    </>
  )
}

export default Home