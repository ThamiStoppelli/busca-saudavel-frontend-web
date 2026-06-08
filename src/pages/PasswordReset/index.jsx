import { useRef, useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AuthContext } from '../../context/auth';
import ResendIcon from '../../assets/icons/resend.svg';
import Loading from '../../components/Loading';
import api from '../../services/api';

import { Container, Content } from './styles';

function PasswordReset() {
  const { setLoading, loading, recoveryEmail } = useContext(AuthContext);
  const formRef = useRef(null);
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(token);
    console.log(password);
    console.log(recoveryEmail);
  }, [token, password, recoveryEmail]);

  async function HandleSubmit(field) {
    field.preventDefault();
    setLoading(true);

    api.put("/auth/reset_password", {
      password_reset_token: token,
      email: recoveryEmail,
      password: password,
    }).then(function (response) {
      if (response.status === 200) {
        setLoading(false);
        navigate('/login');
        toast.success("Senha alterada com sucesso");
      }
    }).catch(function (error) {
      setLoading(false);
      console.log(error);
      toast.error("Não foi possível alterar a senha. Corrija os dados ou envie outro e-mail de recuperação de senha");
    });
  }

  return (
    <div>
      <Header />

      <Container>
        <Content>
          <div className="headerText">
            <h1>Redefinir senha</h1>
            <p>
              Informe o token enviado para seu e-mail e escolha uma nova senha.
            </p>
          </div>

          <form onSubmit={HandleSubmit} ref={formRef}>
            <div className="fieldGroup">
              <label htmlFor="token">Token</label>
              <input
                id="token"
                type="text"
                value={token}
                maxLength={4}
                onChange={(e) => setToken(e.target.value)}
                className="inputText"
                required
                placeholder="Informe o token"
              />
            </div>

            <div className="fieldGroup">
              <label htmlFor="password">Nova senha</label>
              <input
                id="password"
                type="password"
                value={password}
                maxLength={8}
                onChange={(e) => setPassword(e.target.value)}
                className="inputText"
                required
                placeholder="Digite sua nova senha"
              />
            </div>

            <div className="resend-email">
              <img src={ResendIcon} alt="" />
              <NavLink to="/senha/recuperar" className={({ isActive }) => (isActive ? "active-link" : "link")}>
                Reenviar código de verificação
              </NavLink>
            </div>

            {loading ? (
              <button type="button" className="botao">
                <Loading />
              </button>
            ) : (
              <button type="submit" className="botao">
                Alterar senha
              </button>
            )}
          </form>

          <div className="linksArea">
            <p>
              Lembrou da senha?{' '}
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "link")}>
                Entre aqui
              </NavLink>
            </p>

            <p>
              Já conhece todas as funcionalidades do Busca Saudável?{' '}
              <NavLink to="/sobre" className={({ isActive }) => (isActive ? "active-link" : "link")}>
                Saiba mais
              </NavLink>
            </p>
          </div>
        </Content>
      </Container>

      <Footer />
    </div>
  );
}

export default PasswordReset;