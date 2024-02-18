import { useRef, useState, useContext } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { Container, Content } from './styles'
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/auth';


function Login() {

  const { HandleLogin, setLoading, loading } = useContext(AuthContext);
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function HandleSubmit(field) {
    field.preventDefault()
    setLoading(true)
    await HandleLogin(email, password)
  }

  return (
    <div>
      <Header />
      <Container>
        <Content>
          <h1>Entrar no Busca Saudável</h1>
          <form onSubmit={HandleSubmit} ref={formRef}>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" value={email} maxLength={120} onChange={(e) => setEmail(e.target.value)} className='inputText' required
              placeholder="Digite seu e-mail" />
            <label htmlFor="password">Senha</label>
            <input id='password' type="password" value={password} maxLength={8} onChange={(e) => setPassword(e.target.value)} className='inputText' required
              placeholder="Digite sua senha" />
            <label className='textoSenha'><NavLink to="/senha/recuperar" className={({ isActive }) => (isActive ? "active-link" : "link")} ><u>Esqueci a senha</u></NavLink></label>
            <input type="submit" value="Entrar" className='botao' />
          </form>
          <label className='textoCadastro'>Novo por aqui? <NavLink to="/cadastrar" className={({ isActive }) => (isActive ? "active-link" : "link")} ><u>Crie sua conta</u></NavLink></label>
          <label className='textoFuncionalidade'>Já conhece todas as funcionalidades do Busca Saudável? <NavLink
            to="/sobre" className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            <u>Saiba mais.</u></NavLink></label>
        </Content>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;
