import Navbar from '../components/navbar/'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section>
      <Navbar/>
      <div className={styles.containerBemvindo}>
        <h1>BEM VINDO AVENTUREIRO</h1>
        <p>ESTE SITE É UM GUIA PARA TODOS OS JOGADORES DA MESA DE D&D DO JÚNIOR MATOS, AQUI O SISTEMA SE BASEIA NO D&D COM ALGUMAS COISINHAS A MENOS E A MAIS, FIQUE A VONTADE PARA EXPLORAR O SITE E ENCONTRAR O QUE VOÇE PROCURA,CLIQUE AQUI PARA VOCÊ ENCONTRA TODOS OS ARTIGOS NECESSÁRIOS.</p>
      </div>
    </section>
  )
}
