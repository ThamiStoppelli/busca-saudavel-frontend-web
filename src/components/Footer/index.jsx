import Logo from '../../assets/images/logo-footer.svg';
import Instagram from '../../assets/icons/insta-white.svg';
import Facebook from '../../assets/icons/face-white.svg';
import Twitter from '../../assets/icons/twitter-white.svg';

import { ContainerGeral, Container, ContainerDados, ContainerDadosLink } from './styles'

function Footer(){
  return(
    <ContainerGeral>
      <Container>
        <ContainerDados>
          <img src={Logo} alt='logo busca saudável' className='logo'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis pellentesque tempus suscipit</p>
          <div>
            <a href={'https://pt-br.facebook.com/'}>
              <img src={Facebook} alt='ícone facebook' className='icon'/>
            </a>
            <a href={'https://www.instagram.com/'}>
              <img src={Instagram} alt='ícone instagram' className='icon'/>
            </a>
            <a href={'https://twitter.com/?lang=pt-br'}>
              <img src={Twitter} alt='ícone twitter' className='icon'/>
            </a>
          </div>
        </ContainerDados>
        <ContainerDadosLink>
          <div>
            <ul>
              <p>LOREM IPSUM</p>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div>
            <ul>
              <p>LOREM IPSUM</p>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div>
            <ul>
              <p>LOREM IPSUM</p>
              <li>Sobre nós</li>
              <li>Nosso time</li>
              <li>Contato</li>
            </ul>
          </div>
        </ContainerDadosLink>
      </Container>
      <p style={{ textAlign: 'center'}}>Copyright © 2022</p>
    </ContainerGeral>
  )
}
  
export default Footer;