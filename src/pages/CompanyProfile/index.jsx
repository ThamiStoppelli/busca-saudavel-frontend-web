import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import CompanyImage from '../../assets/icons/company-img.svg'
import semImagem from '../../assets/images/sem-imagem.png';
import EditIcon from '../../assets/icons/edit.svg'

import { OuterContainer, Container, Content, ContainerNome, ContainerConteudo } from './styles'

function CompanyProfile() {
    const { token, user, setUser, initialToken, userType } = useContext(AuthContext)
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState([]);

    function getInfoPerfil() {
        api
            .get(`/user/get/${user._id}`)
            .then(res => {
                setUserInfo(res.data)
            })
            .catch(e => {
                console.log(e.message)
            })
    }

    useEffect(() => {
        getInfoPerfil();
        console.log(userInfo)
    }, [])

    function RedirecionarEditar() {
        navigate(`/perfilempresa/editar/`);
    }

    return (
        <>
            <Header />
            <OuterContainer>
                <Container>
                    <ContainerNome>
                        <span style={{ width: '1rem' }} />
                        <p>Dados da empresa</p>
                        <img src={EditIcon} alt='editar' onClick={() => RedirecionarEditar(user._id)} />
                    </ContainerNome>
                    <ContainerConteudo>
                        <div className='containerImage'>
                            {userInfo.image ?
                                <img src={`data:image/png;base64,${userInfo.image}`} alt='' />
                                :
                                <img src={semImagem} alt='' />
                            }
                        </div>
                        <Content>
                            <p className='bold'>Nome do fornecedor</p>
                            <p>{userInfo.name}</p>
                            <p className='bold'>CNPJ</p>
                            <p>{userInfo.crm_cnpj}</p>
                            <p className='bold'>E-mail</p>
                            <p>{userInfo.email}</p>
                        </Content>
                    </ContainerConteudo>

                </Container>
            </OuterContainer>
            <Footer />
        </>
    )
}

export default CompanyProfile;