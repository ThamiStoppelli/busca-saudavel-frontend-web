import { useRef, useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AuthContext } from '../../context/auth';
import Loading from '../../components/Loading';
import api from '../../services/api';

import { Container, Content } from './styles';

function PasswordRecovery() {
  const { setLoading, loading, recoveryEmail, setRecoveryEmail } = useContext(AuthContext);
  const formRef = useRef(null);
  const toastId = useRef(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setRecoveryEmail(email);
  }, [email, setRecoveryEmail]);

  async function HandleSubmit(field) {
    field.preventDefault();

    setLoading(true);

    api.post("/auth/forgot_password", {
      email: email,
    }).then(function (response) {
      localStorage.setItem("recoveryEmail", recoveryEmail);

      if (response.status === 200) {
        setLoading(false);
        navigate('/login');
        toast.success("Caso este e-mail esteja cadastrado, cheque sua caixa de entrada");
      }
    }).catch(function (error) {
      console.log(error.message);
      setLoading(false);

      if (error.message === "Network Error") {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error("Ocorreu um erro de conexão ao serviço");
        }
      } else {
        setTimeout(() => navigate('/login'), 5000);
        toast.error("Ocorreu um erro de conexão ao serviço");
      }
    });
  }

  return (
    <div>
      <Header />

      <Container>
        <Content>
          <div className="headerText">
            <h1>Recuperação de senha</h1>
            <p>
              Informe seu e-mail cadastrado para receber as instruções de recuperação.
            </p>
          </div>

          <form onSubmit={HandleSubmit} ref={formRef}>
            <div className="fieldGroup">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                value={email}
                maxLength={120}
                onChange={(e) => setEmail(e.target.value)}
                className="inputText"
                required
                placeholder="Digite seu e-mail"
              />
            </div>

            {loading ? (
              <button type="button" className="botao">
                <Loading />
              </button>
            ) : (
              <button type="submit" className="botao">
                Enviar instruções
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

export default PasswordRecovery;