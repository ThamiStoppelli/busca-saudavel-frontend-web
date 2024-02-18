import coracao from '../../assets/icons/not-favorited.png';
import { Container, ContainerTitulo, ContainerConteudo, ContainerNutri } from './styles';

function CardDicas({ dados, clickFavorite }){
  
  return(
    <>
    { dados ? 
      <Container>
        <ContainerTitulo>
          <span className="icon" />
          <p>{dados.titulo}</p>
          <img src={coracao} alt='favoritar' className='icon' onClick={clickFavorite}/>
          {/* checar se usuario esta logado */}

        </ContainerTitulo>
        <ContainerConteudo>
          <img src={dados.imagemDica} alt=''/>
          <div>
            <p>{dados.texto}</p>
          </div>
        </ContainerConteudo>
        <ContainerNutri>
          <div className="nutri">
            <img src={dados.imagemNutri} alt=''/>
            <p>{dados.nutri}</p>
          </div>
          <div className="tags">
            <p>Tags:</p>
            <ul>
              <li>a</li>
              <li>b</li>
            </ul>
          </div>
        </ContainerNutri>
      </Container>
    : null }
    </>
  )
}
  
export default CardDicas;