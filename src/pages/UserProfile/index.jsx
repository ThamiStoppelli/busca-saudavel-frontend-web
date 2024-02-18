import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import semImagem from '../../assets/images/sem-imagem.png';
import EditIcon from '../../assets/icons/edit.svg';

import { OuterContainer, Container, Content, ContainerNome, ContainerConteudo } from './styles';

const UserProfile = () => {
  const { token, user, setUser, initialToken, userType } = useContext(AuthContext)
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  function getInfoPerfil() {
    api
      .get(`/user/get/${user._id}`)
      .then(res => {
        setUserInfo(res.data)
        setYear(res.data.birth_date.split('-')[0])
        setMonth(res.data.birth_date.split('-')[1])
        setDay(res.data.birth_date.split('-')[2].split('')[0] + res.data.birth_date.split('-')[2].split('')[1])
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  useEffect(() => {
    getInfoPerfil();
    console.log(userInfo)
  }, [])

  function RedirecionarEditar() {
    navigate(`/perfil/editar`);
  }

  return (
    <>
      <Header />
      <OuterContainer>
        <Container>
          <ContainerNome>
            <span style={{ width: '1rem' }} />
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
              <div>
                <p className='bold'>Nome</p>
                <p>{userInfo.name}</p>
                <p className='bold'>E-mail</p>
                <p>{userInfo.email}</p>
              </div>
              <div>
                <p className='bold'>Data de aniversário</p>
                <p>{day}/{month}/{year}</p>
                <p className='bold'>Cidade</p>
                <p>{userInfo.location}</p>
              </div>
            </Content>
          </ContainerConteudo>
        </Container>
      </OuterContainer>
      <Footer />
    </>
  )
}

export default UserProfile;