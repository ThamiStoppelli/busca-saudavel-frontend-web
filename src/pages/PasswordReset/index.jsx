import { useRef, useState, useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { AuthContext } from '../../context/auth';
import ResendIcon from '../../assets/icons/resend.svg'
import Loading from '../../components/Loading';
import api from '../../services/api';

import { Container, Content } from './styles'
import { useEffect } from 'react';

function PasswordReset() {

    const { setLoading, loading, recoveryEmail, setRecoveryEmail } = useContext(AuthContext);
    const formRef = useRef(null);
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate()

    useEffect(() => {
        console.log(token)
        console.log(password)
        console.log(recoveryEmail)
    }, [token, password])

    async function HandleSubmit(field) {
        field.preventDefault()
        setLoading(true)

        api.put("/auth/reset_password", {
            password_reset_token: token,
            email: recoveryEmail,
            password: password,
        }).then(function (response) {
            if (response.status == 200) {
                setLoading(false);
                console.log(response)
                navigate('/login')
                toast.success("Senha alterada com sucesso");
            }
        }).catch(function (error) {
                setLoading(false);
                console.log(error)
                toast.error("Não foi possível alterar a senha. Corrija os dados ou envie outro email de recuperação de senha");
        });
    }

    return (
        <div>
            <Header />
            <Container>
                <Content>
                    <h1>Recuperação de senha</h1>
                    <h4>Informe o token que foi enviado para o seu e-mail e redefina sua senha no campo abaixo.</h4>
                    <form onSubmit={HandleSubmit} ref={formRef}>
                        <label htmlFor="token">Token</label>
                        <input id="token" type="text" value={token} maxLength={4} onChange={(e) => setToken(e.target.value)} className='inputText' required
                            placeholder="Informe o token" />
                        <label htmlFor="password">Nova senha</label>
                        <input id='password' type="password" value={password} maxLength={8} onChange={(e) => setPassword(e.target.value)} className='inputText' required
                            placeholder="Digite sua nova senha" />
                        <div className='resend-email'>
                            <img src={ResendIcon}></img>
                            <label className='textoSenha'><NavLink to="/senha/recuperar" className={({ isActive }) => (isActive ? "active-link" : "link")} ><u>Reenviar código de verificação</u></NavLink></label>
                        </div>
                        <input type="submit" value="Alterar" className='botao' />
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

export default PasswordReset;
