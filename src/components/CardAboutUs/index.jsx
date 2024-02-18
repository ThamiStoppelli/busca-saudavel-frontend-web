import Instagram from '../../assets/icons/icon-insta.svg';
import Linkedin from '../../assets/icons/icon-linkedin.svg';
import { Container } from './styles'

function CardAboutUs({
  nome, texto, foto,
  instagram, linkedin
}) {
  return(
    <Container>
      <img src={foto} alt='foto colaborador' className="foto"/>
      <div>
        <h3>{nome}</h3>
        <p>{texto}</p>
        <a href={instagram}>
          <img src={Instagram} alt='instagram' className='icone'/>
        </a>
        <a href={linkedin}>
          <img src={Linkedin} alt='linkedin' className='icone'/>
        </a>
      </div>
    </Container>
  )
}

export default CardAboutUs;