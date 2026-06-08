import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo-footer.svg';
import Instagram from '../../assets/icons/insta-white.svg';
import Facebook from '../../assets/icons/face-white.svg';
import Twitter from '../../assets/icons/twitter-white.svg';

import { ContainerGeral, Container, ContainerDados, ContainerDadosLink } from './styles'

function Footer() {
  return (
    <ContainerGeral>
      <Container>
        <ContainerDados>
          <img src={Logo} alt='Logo Busca Saudável' className='logo' />

          <p>
            Encontre produtos compatíveis com suas restrições alimentares de forma simples,
            rápida e segura.
          </p>

          <div className="socialLinks">
            <a href='https://pt-br.facebook.com/' target='_blank' rel='noreferrer'>
              <img src={Facebook} alt='Facebook' className='icon' />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
              <img src={Instagram} alt='Instagram' className='icon' />
            </a>
            <a href='https://twitter.com/?lang=pt-br' target='_blank' rel='noreferrer'>
              <img src={Twitter} alt='Twitter' className='icon' />
            </a>
          </div>
        </ContainerDados>

        <ContainerDadosLink>
          <div>
            <ul>
              <p>PRODUTOS</p>
              <li>
                <Link to="/">Explorar produtos</Link>
              </li>
              <li>
                <Link to="/favoritos">Meus favoritos</Link>
              </li>
              <li>
                <Link to="/produtos">Produtos cadastrados</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <p>FORNECEDORES</p>
              <li>
                <Link to="/produtos">Gerenciar catálogo</Link>
              </li>
              <li>
                <Link to="/perfilempresa">Perfil da empresa</Link>
              </li>
              <li>
                <Link to="/login">Entrar como fornecedor</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <p>BUSCA SAUDÁVEL</p>
              <li>
                <Link to="/">Sobre o projeto</Link>
              </li>
              <li>
                <Link to="/">Segurança alimentar</Link>
              </li>
              <li>
                <Link to="/">Contato</Link>
              </li>
            </ul>
          </div>
        </ContainerDadosLink>
      </Container>

      <p className="copyright">Copyright © 2026 Busca Saudável</p>
    </ContainerGeral>
  )
}

export default Footer;