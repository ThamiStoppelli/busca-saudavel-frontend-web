import Instagram from '../../assets/icons/icon-insta.svg';
import Linkedin from '../../assets/icons/icon-linkedin.svg';

import { Container } from './styles';

function CardAboutUs({
  nome,
  texto,
  foto,
  instagram,
  linkedin
}) {
  return (
    <Container>
      <img src={foto} alt={`Foto de ${nome}`} className="foto" />

      <div className="content">
        <h3>{nome}</h3>
        <p>{texto}</p>

        <div className="socialLinks">
          <a href={instagram} target="_blank" rel="noreferrer" aria-label={`Instagram de ${nome}`}>
            <img src={Instagram} alt="" className="icone" />
          </a>

          <a href={linkedin} target="_blank" rel="noreferrer" aria-label={`LinkedIn de ${nome}`}>
            <img src={Linkedin} alt="" className="icone" />
          </a>
        </div>
      </div>
    </Container>
  );
}

export default CardAboutUs;