import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import semImagem from '../../assets/images/sem-imagem.png';
import EditIcon from '../../assets/icons/edit.svg';
import { getImageSource } from '../../utils/image';

import {
  OuterContainer,
  Container,
  Content,
  ContainerNome,
  ContainerConteudo
} from './styles';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({});

  function getInfoPerfil() {
    api
      .get(`/user/get/${user._id}`)
      .then(res => {
        setUserInfo(res.data);
      })
      .catch(e => {
        console.error(e.message);
      });
  }

  useEffect(() => {
    getInfoPerfil();
  }, []);

  function formatBirthDate(date) {
    if (!date) return 'Não informado';

    const [year, month, day] = date.split('-');

    if (!year || !month || !day) return date;

    return `${day.slice(0, 2)}/${month}/${year}`;
  }

  function redirecionarEditar() {
    navigate('/perfil/editar');
  }

  return (
    <>
      <Header />

      <OuterContainer>
        <Container>
          <ContainerNome>
            <div>
              <p>Meu perfil</p>
              <span>Gerencie suas informações pessoais</span>
            </div>

            <button type="button" onClick={redirecionarEditar} aria-label="Editar perfil">
              <img src={EditIcon} alt="" />
              Editar
            </button>
          </ContainerNome>

          <ContainerConteudo>
            <div className='containerImage'>
              <img
                src={getImageSource(userInfo.image || userInfo.image_url, semImagem)}
                alt={`Foto de perfil de ${userInfo.name || 'usuário'}`}
              />
            </div>

            <Content>
              <div className="profileField">
                <p className='label'>Nome</p>
                <p className='value'>{userInfo.name || 'Não informado'}</p>
              </div>

              <div className="profileField">
                <p className='label'>E-mail</p>
                <p className='value'>{userInfo.email || 'Não informado'}</p>
              </div>

              <div className="profileField">
                <p className='label'>Data de aniversário</p>
                <p className='value'>{formatBirthDate(userInfo.birth_date)}</p>
              </div>

              <div className="profileField">
                <p className='label'>Cidade</p>
                <p className='value'>{userInfo.location || 'Não informado'}</p>
              </div>
            </Content>
          </ContainerConteudo>
        </Container>
      </OuterContainer>

      <Footer />
    </>
  );
};

export default UserProfile;