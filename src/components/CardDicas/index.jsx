import coracao from '../../assets/icons/not-favorited.png';
import { Container, ContainerTitulo, ContainerConteudo, ContainerNutri } from './styles';

function CardDicas({ dados, clickFavorite }) {
  if (!dados) return null;

  return (
    <Container>
      <ContainerTitulo>
        <div>
          <h3>{dados.titulo}</h3>
          <p>Conteúdo recomendado por especialista</p>
        </div>

        <button type="button" onClick={clickFavorite} aria-label="Favoritar dica">
          <img src={coracao} alt="" />
        </button>
      </ContainerTitulo>

      <ContainerConteudo>
        <img src={dados.imagemDica} alt={dados.titulo} />

        <div>
          <p>{dados.texto}</p>
        </div>
      </ContainerConteudo>

      <ContainerNutri>
        <div className="nutri">
          <img src={dados.imagemNutri} alt={`Foto de ${dados.nutri}`} />

          <div>
            <span>Nutricionista</span>
            <p>{dados.nutri}</p>
          </div>
        </div>

        <div className="tags">
          <span>Tags</span>

          <ul>
            {dados.tags?.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </ContainerNutri>
    </Container>
  );
}

export default CardDicas;