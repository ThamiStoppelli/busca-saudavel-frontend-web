import Voltar from '../../assets/icons/anterior.svg';
import Proximo from '../../assets/icons/proximo.svg';

import { Container, Content } from './styles'

function Paginacao({ nPages, paginaAtual, setPaginaAtual }){
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if(paginaAtual !== nPages) {
      setPaginaAtual(paginaAtual + 1)
    }
  }
  const prevPage = () => {
    if(paginaAtual !== 1) {
      setPaginaAtual(paginaAtual - 1)
    }
  }

  return(
    <>
      <nav>
      <Container>
        <Content className="page-item">
          <a className="page-link" onClick={prevPage} href="#pontoChave"> 
            <img src={Voltar} alt='voltar'/>
          </a>
        </Content>
        {pageNumbers? pageNumbers.map(pgNumber => {
          return(
            <Content key={pgNumber} className={`page-item ${paginaAtual == pgNumber ? 'active' : '' } `} >
              <a onClick={() => setPaginaAtual(pgNumber)} className='page-link' href='#pontoChave' >{pgNumber}</a>
            </Content>
          )
        }): null}
        <Content className="page-item">
          <a className="page-link" onClick={nextPage} href="#pontoChave"> 
            <img src={Proximo} alt='proximo'/>
          </a>
        </Content>
      </Container>
    </nav>
    </>
  )
}
  
export default Paginacao;