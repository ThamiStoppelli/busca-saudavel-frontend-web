import CardAboutUs from '../../components/CardAboutUs';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import logo from '../../assets/images/logo-sobre.png';
import FotoMatheus from '../../assets/images/matheus.png';
import FotoThamires from '../../assets/images/thamires.png';
import FotoLuiza from '../../assets/images/luiza.png';
import FotoCamila from '../../assets/images/camila.png';

import { Container, Content, ContentCards } from './styles'

function About() {

  return (
    <div>
      <Header />
      <Container>
        <h2> Sobre o Busca Saudável</h2>
        <Content>
          <img src={logo} alt='logo'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis tempus ut scelerisque feugiat pulvinar aliquam placerat purus nec. Leo, eu eleifend libero pulvinar urna ullamcorper lobortis nisl. Integer pulvinar tellus scelerisque maecenas at nunc. <br/>
          Tellus, ultrices id curabitur lacus, aliquam id velit adipiscing pulvinar. Sit at volutpat diam id. Vel ac elit, malesuada laoreet tristique eu diam proin. Id quis eget odio vitae interdum. Sed pellentesque fermentum justo, felis pulvinar suspendisse. Malesuada venenatis, quam libero, eget scelerisque. Sapien, faucibus fermentum donec gravida. <br/>
          Nullam est urna feugiat luctus egestas eros. Adipiscing blandit nunc massa feugiat in egestas commodo. Viverra porta amet sit porttitor dui tristique arcu. Et ullamcorper lectus amet, in cursus. Elit vitae sed tortor enim sit amet facilisis egestas non. </p>
        </Content>
        <h2> Nosso time</h2>
        <ContentCards>
          <CardAboutUs 
            nome={"Matheus Cosme"}
            texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis tempus ut scelerisque feugiat pulvinar aliquam placerat purus nec."}
            foto={FotoMatheus}
            instagram={"https://www.instagram.com/cosmemc/"}
            linkedin={"https://www.linkedin.com/in/matheus-cosme-alencar/"}
            />
          <CardAboutUs 
            nome={"Thamires Stoppelli"}
            texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis tempus ut scelerisque feugiat pulvinar aliquam placerat purus nec."}
            foto={FotoThamires}
            instagram={"https://www.instagram.com/thamistoppelli/"}
            linkedin={"https://www.linkedin.com/in/thamires-stoppelli-6ab51a175/"}
            />
          <CardAboutUs 
            nome={"Luiza Gadelha"}
            texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis tempus ut scelerisque feugiat pulvinar aliquam placerat purus nec."}
            foto={FotoLuiza}
            instagram={"https://www.instagram.com/gadelhaluiza/"}
            linkedin={"https://www.linkedin.com/in/luiza-gadelha/"}
            />
          <CardAboutUs 
            nome={"Camila Medeiros"}
            texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis tempus ut scelerisque feugiat pulvinar aliquam placerat purus nec."}
            foto={FotoCamila}
            instagram={"https://www.instagram.com/lazyant__/"}
            linkedin={"https://www.linkedin.com/in/camila-medeir0s/"}
            />
        </ContentCards>
      </Container>
      <Footer />
    </div>
  );
}
  
export default About;
  