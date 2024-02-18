import React, { useRef, useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Content, InputContent } from './styles'
import api from "../../services/api"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

    const formRef = useRef(null);
    const navigate = useNavigate();
    const [supplier, setSupplier] = useState(false);
    const [data, setData] = useState(newData);
    const [dataSupplier, setDataSupplier] = useState(newDataSupplier);

    function changeUserType() {
        if (document.getElementById('consumidor').checked) {
            setSupplier(false);
        } else if (document.getElementById('fornecedor').checked) {
            setSupplier(true);
        }
    }

    function newData() {
        return {
            name: '',
            birth_date: '',
            email: '',
            password: '',
            image: 'ainda não',
            user_type: '',
            location: 'Fortaleza',
        }
    }

    function newDataSupplier() {
        return {
            name: '',
            crm_cnpj: '',
            email: '',
            password: '',
            image: 'ainda não',
            user_type: '',
            location: 'Fortaleza',
        }
    }

    function handleChange(field) {
        const { name, value } = field.target;
        setData({ ...data, [name]: value })
        console.log(field.target.value)
    }

    function handleChangeSupplier(field) {
        const { name, value } = field.target;
        setDataSupplier({ ...dataSupplier, [name]: value })
        console.log(field.target.value)
    }

    function handleSignUp(e) {
        e.preventDefault();

        if(supplier) {
            api.post("/user/register", dataSupplier).then(function (response) {

                setDataSupplier(response.data)
                console.log(dataSupplier)
                navigate('/login')
                toast.success("Cadastro realizado com sucesso");
    
            }).catch(function (error) {
                console.log(error)
            });
        } else {
            api.post("/user/register", data).then(function (response) {
    
                setData(response.data)
                console.log(data)
                navigate('/login')
                toast.success("Cadastro realizado com sucesso");
    
            }).catch(function (error) {
                console.log(error)
            });
        }
    }

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <h1>Realizar cadastro no Busca Saudável</h1>

                    <form 
                    onSubmit={handleSignUp} 
                    ref={formRef}>
                        <div className='type-user'>
                            <h4>Selecione o seu tipo de usuário</h4>
                            <div className='radio-button'>
                                <input type="radio" id="consumidor" name="user_type" value={2} onClick={() => changeUserType()} onChange={handleChange} />
                                <label for="consumidor"><b>Consumidor</b> - Lorem ipsum dolor sit amet</label>
                            </div>
                            <div className='radio-button'>
                                <input type="radio" id="fornecedor" name="user_type" value={1} onClick={() => changeUserType()} onChange={handleChangeSupplier} />
                                <label for="fornecedor"><b>Fornecedor</b> - Lorem ipsum dolor sit amet</label>
                            </div>
                        </div>

                        {supplier ?
                            <InputContent>
                                <label htmlFor="name">Nome do fornecedor</label>
                                <input id="name" name="name" type="text" value={dataSupplier.name} maxLength={120} placeholder="Digite o nome da pessoa jurídica" onChange={handleChangeSupplier} className='inputText' required />

                                <label htmlFor="cnpj">CNPJ</label>
                                <input id="cnpj" name="crm_cnpj" type="number" value={dataSupplier.crm_cnpj} placeholder="Digite o número do Cadastro Nacional de Pessoa Jurídica" onChange={handleChangeSupplier}  maxLength={20}
                                    //XX. XXX. XXX/0001-XX (inscricao sao os 8 primeiros digitos e nuumeros seguintes é a matriz) -> colocar mask
                                    className='inputText' required />

                                <label htmlFor="email">E-mail</label>
                                <input id="email" name="email" type="email" value={dataSupplier.email} maxLength={120} placeholder="Digite seu e-mail" onChange={handleChangeSupplier} className='inputText' required />

                                <label htmlFor="password">Senha</label>
                                <input id='password' name="password" type="password" value={dataSupplier.password} maxLength={8} placeholder="Digite sua senha" onChange={handleChangeSupplier} className='inputText' required />

                                {/* <label htmlFor="confirm-password">Confirmar senha</label>
                                <input id='confirm-password' name="confirm-password" type="password" value={confirmPassword} maxLength={8} placeholder="Digite sua senha novamente" className='inputText' required /> */}
                            </InputContent>
                            :
                            <InputContent>
                                <label htmlFor="name">Nome completo</label>
                                <input id="name" name="name" type="text" value={data.name} maxLength={120} placeholder="Digite seu nome completo" onChange={handleChange} className='inputText' required />

                                <label htmlFor="birth-date">Data de nascimento</label>
                                <input id="birth-date" name="birth_date" type="date" value={data.birth_date} onChange={handleChange} className='inputText' required />

                                <label htmlFor="email">E-mail</label>
                                <input id="email" name="email" type="email" value={data.email} maxLength={120} placeholder="Digite seu e-mail" onChange={handleChange} className='inputText' required />

                                <label htmlFor="password">Senha</label>
                                <input id='password' name="password" type="password" value={data.password} maxLength={8} placeholder="Digite sua senha" onChange={handleChange} className='inputText' required />

                                {/* <label htmlFor="confirm-password">Confirmar senha</label>
                            <input id='confirm-password' name="confirm-password" type="password" value={confirmPassword} maxLength={8} placeholder="Digite sua senha novamente" className='inputText' required /> */}
                            </InputContent>
                        }

                        <div className='button'>
                            <button type="submit" id="signUp-button">Cadastrar</button>

                        </div>
                    </form>
                </Content>
            </Container>
            <Footer />
        </>
    )
}

export default SignUp;