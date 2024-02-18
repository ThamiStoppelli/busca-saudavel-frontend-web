import { useRef, useState, useContext } from 'react';
import { Container, Content } from './styles'
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/auth';
import logo from '../../assets/images/logo-modal.svg';
import closeIcon from '../../assets/icons/close.svg';

function ModalLogin({ onClick }) {

  const { HandleLogin, setLoading, loading } = useContext(AuthContext);
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function HandleSubmit(field) {
    field.preventDefault()
    setLoading(true)
    onClick();
    await HandleLogin(email, password)
  }

  return (
    <div>
      <Container>
        <Content>
          <div>
          <div className='close-icon' onClick={onClick}>
            <img src={closeIcon} ></img>
          </div>
          <div className='header'>
            <img src={logo}></img>
          </div>
          </div>
          <h1>Entrar no Busca Saudável</h1>
          <form onSubmit={HandleSubmit} ref={formRef}>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" value={email} maxLength={120} onChange={(e) => setEmail(e.target.value)} className='inputText' required
              placeholder="Digite seu e-mail" />
            <label htmlFor="password">Senha</label>
            <input id='password' type="password" value={password} maxLength={8} onChange={(e) => setPassword(e.target.value)} className='inputText' required
              placeholder="Digite sua senha" />
            <label className='textoSenha'><u>Esqueci a senha</u></label>
            <input type="submit" value="Entrar" className='botao' />
          </form>
          <label className='textoCadastro'>Novo por aqui? <NavLink to="/cadastrar" className={({ isActive }) => (isActive ? "active-link" : "link")} ><u>Crie sua conta</u></NavLink></label>
        </Content>
      </Container>
    </div>
  );
}

export default ModalLogin;
