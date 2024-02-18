import { useRef, useState, useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { AuthContext } from '../../context/auth';
import Loading from '../../components/Loading';
import api from '../../services/api';

import { Container, Content } from './styles'
import { useEffect } from 'react';

function PasswordRecovery() {

    const { setLoading, loading, recoveryEmail, setRecoveryEmail } = useContext(AuthContext);
    const formRef = useRef(null);
    const toastId = useRef(null)
    const [email, setEmail] = useState("");
    let navigate = useNavigate()

    useEffect(() => {
        setRecoveryEmail(email);
    }, [email])

    async function HandleSubmit(field) {
        field.preventDefault()

        setLoading(true);

        api.post("/auth/forgot_password", {
            email: email,
        }).then(function (response) {
            
            console.log(email)
            localStorage.setItem("recoveryEmail", recoveryEmail);
            console.log(recoveryEmail)


            if (response.status == 200) {
                setLoading(false);
                console.log(response)
                navigate('/login')
                toast.success("Caso este e-mail esteja cadastrado, cheque sua caixa de entrada");
            }

        }).catch(function (error) {

            console.log(error.message);

            if (error.message == "Network Error") {
                setLoading(false);
                console.log(error)
                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.error("Ocorreu um erro de conexão ao serviço");
                }

            } else {
                setLoading(false);
                const myTimeout = setTimeout(navigate('/login'), 5000)
                toast.error("Ocorreu um erro de conexão ao serviço");
            }
        });
    }

    return (
        <div>
            <Header />
            <Container>
                <Content>
                    <h1>Recuperação de senha</h1>
                    <h4>Insira seu email cadastrado abaixo, para que possamos lhe enviar a instrução de recuperação de senha.</h4>
                    <form onSubmit={HandleSubmit} ref={formRef}>
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" value={email} maxLength={120} onChange={(e) => setEmail(e.target.value)} className='inputText' required
                            placeholder="Digite seu e-mail" />

                        {loading ?
                            <button>
                                <Loading />
                            </button>
                            :
                            <input type="submit" value="Enviar" className='botao' />}
                    </form>
                    <label className='textoCadastro'>Lembrou da senha? <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "link")} ><u>Entre aqui!</u></NavLink></label>
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

export default PasswordRecovery;
