import React, { useRef, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Content, InputContent } from './styles';
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState(false);
  const [data, setData] = useState(newData);
  const [dataSupplier, setDataSupplier] = useState(newDataSupplier);

  function changeUserType(type) {
    setSupplier(type === 'supplier');
  }

  function newData() {
    return {
      name: '',
      birth_date: '',
      email: '',
      password: '',
      image: 'ainda não',
      user_type: 2,
      location: 'Fortaleza',
    };
  }

  function newDataSupplier() {
    return {
      name: '',
      crm_cnpj: '',
      email: '',
      password: '',
      image: 'ainda não',
      user_type: 1,
      location: 'Fortaleza',
    };
  }

  function handleChange(field) {
    const { name, value } = field.target;
    setData({ ...data, [name]: value });
  }

  function handleChangeSupplier(field) {
    const { name, value } = field.target;
    setDataSupplier({ ...dataSupplier, [name]: value });
  }

  function handleSignUp(e) {
    e.preventDefault();

    if (supplier) {
      api.post("/user/register", dataSupplier).then(function (response) {
        setDataSupplier(response.data);
        navigate('/login');
        toast.success("Cadastro realizado com sucesso");
      }).catch(function (error) {
        console.log(error);
        toast.error("Não foi possível realizar o cadastro");
      });
    } else {
      api.post("/user/register", data).then(function (response) {
        setData(response.data);
        navigate('/login');
        toast.success("Cadastro realizado com sucesso");
      }).catch(function (error) {
        console.log(error);
        toast.error("Não foi possível realizar o cadastro");
      });
    }
  }

  return (
    <>
      <Header />

      <Container>
        <Content>
          <div className="headerText">
            <h1>Realizar cadastro no Busca Saudável</h1>
            <p>Crie sua conta para buscar produtos ou gerenciar um catálogo como fornecedor.</p>
          </div>

          <form onSubmit={handleSignUp} ref={formRef}>
            <div className="type-user">
              <h4>Selecione o seu tipo de usuário</h4>

              <label className={`optionCard ${!supplier ? 'active' : ''}`} htmlFor="consumidor">
                <input
                  type="radio"
                  id="consumidor"
                  name="user_type"
                  value={2}
                  checked={!supplier}
                  onChange={(event) => {
                    changeUserType('consumer');
                    handleChange(event);
                  }}
                />

                <span>
                  <strong>Consumidor</strong>
                  <small>Busque produtos compatíveis com suas restrições alimentares.</small>
                </span>
              </label>

              <label className={`optionCard ${supplier ? 'active' : ''}`} htmlFor="fornecedor">
                <input
                  type="radio"
                  id="fornecedor"
                  name="user_type"
                  value={1}
                  checked={supplier}
                  onChange={(event) => {
                    changeUserType('supplier');
                    handleChangeSupplier(event);
                  }}
                />

                <span>
                  <strong>Fornecedor</strong>
                  <small>Cadastre produtos e gerencie seu catálogo no Busca Saudável.</small>
                </span>
              </label>
            </div>

            {supplier ? (
              <InputContent>
                <div className="fieldGroup">
                  <label htmlFor="name">Nome do fornecedor</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={dataSupplier.name}
                    maxLength={120}
                    placeholder="Digite o nome da pessoa jurídica"
                    onChange={handleChangeSupplier}
                    className="inputText"
                    required
                  />
                </div>

                <div className="fieldGroup">
                  <label htmlFor="cnpj">CNPJ</label>
                  <input
                    id="cnpj"
                    name="crm_cnpj"
                    type="text"
                    value={dataSupplier.crm_cnpj}
                    placeholder="Digite o CNPJ"
                    onChange={handleChangeSupplier}
                    maxLength={20}
                    className="inputText"
                    required
                  />
                </div>

                <div className="fieldGroup">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={dataSupplier.email}
                    maxLength={120}
                    placeholder="Digite seu e-mail"
                    onChange={handleChangeSupplier}
                    className="inputText"
                    required
                  />
                </div>

                <div className="fieldGroup">
                  <label htmlFor="password">Senha</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={dataSupplier.password}
                    maxLength={8}
                    placeholder="Digite sua senha"
                    onChange={handleChangeSupplier}
                    className="inputText"
                    required
                  />
                </div>
              </InputContent>
            ) : (
              <InputContent>
                <div className="fieldGroup">
                  <label htmlFor="name">Nome completo</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={data.name}
                    maxLength={120}
                    placeholder="Digite seu nome completo"
                    onChange={handleChange}
                    className="inputText"
                    required
                  />
                </div>

                <div className="fieldGroup">
                  <label htmlFor="birth-date">Data de nascimento</label>
                  <input
                    id="birth-date"
                    name="birth_date"
                    type="date"
                    value={data.birth_date}
                    onChange={handleChange}
                    className="inputText"
                    required
                  />
                </div>

                <div className="fieldGroup">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                    maxLength={120}
                    placeholder="Digite seu e-mail"
                    onChange={handleChange}
                    className="inputText"
                    required
                  />
                </div>

                <div className="fieldGroup">
                  <label htmlFor="password">Senha</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    maxLength={8}
                    placeholder="Digite sua senha"
                    onChange={handleChange}
                    className="inputText"
                    required
                  />
                </div>
              </InputContent>
            )}

            <div className="button">
              <button type="submit" id="signUp-button">Cadastrar</button>
            </div>
          </form>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default SignUp;