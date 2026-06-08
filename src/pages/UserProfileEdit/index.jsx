import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import semImagem from '../../assets/images/sem-imagem.png';
import { getImageSource, fileToDataUrl } from '../../utils/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  OuterContainer,
  Container,
  Content,
  ContainerNome,
  ContainerConteudo,
  Botoes
} from './styles';

const UserProfileEdit = () => {
  const { token, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(semImagem);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [localizacao, setLocalizacao] = useState('');

  function getInfoPerfil() {
    api
      .get(`/user/get/${user._id}`)
      .then(res => {
        setName(res.data.name || '');
        setEmail(res.data.email || '');
        setDataNascimento(res.data.birth_date || '');
        setLocalizacao(res.data.location || '');
        setImage(res.data.image || res.data.image_url || '');
        setImagePreview(getImageSource(res.data.image || res.data.image_url, semImagem));
      })
      .catch(e => {
        console.log(e.message);
      });
  }

  useEffect(() => {
    getInfoPerfil();
  }, []);

  async function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) return;

    const imageDataUrl = await fileToDataUrl(file);

    setImage(imageDataUrl);
    setImagePreview(imageDataUrl);
  }

  async function atualizar(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("birth_date", dataNascimento);
    formData.append("location", localizacao);
    formData.append("image", image);
    formData.append("image_url", image);

    api
      .put(
        `/user/update/${user._id}`,
        formData,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          },
          data: {
            name,
            email,
            birth_date: dataNascimento,
            location: localizacao,
            image,
            image_url: image
          }
        }
      )
      .then(() => {
        toast.success('Perfil editado com sucesso');
        setTimeout(() => navigate('/perfil'), 800);
      })
      .catch(e => {
        console.error(e.message);
        toast.error('Não foi possível editar o perfil');
      });
  }

  return (
    <>
      <Header />

      <OuterContainer>
        <Container>
          <ContainerNome>
            <div>
              <p>Editar perfil</p>
              <span>Atualize suas informações pessoais</span>
            </div>
          </ContainerNome>

          <form onSubmit={atualizar}>
            <ContainerConteudo>
              <div className="image-div">
                <div className='containerImage'>
                  <img
                    src={imagePreview}
                    alt={`Foto de perfil de ${name || 'usuário'}`}
                  />
                </div>

                <label htmlFor="image" className="uploadButton">
                  Alterar imagem
                </label>

                <input
                  type="file"
                  id="image"
                  className='image-input'
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <Content>
                <div className="fieldGroup">
                  <label>Nome</label>
                  <input
                    type="text"
                    value={name}
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="fieldGroup">
                  <label>E-mail</label>
                  <input
                    type="email"
                    value={email}
                    placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="fieldGroup">
                  <label>Data de aniversário</label>
                  <input
                    type="date"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                </div>

                <div className="fieldGroup">
                  <label>Cidade</label>
                  <input
                    type="text"
                    value={localizacao}
                    placeholder="Digite sua cidade"
                    onChange={(e) => setLocalizacao(e.target.value)}
                  />
                </div>
              </Content>
            </ContainerConteudo>

            <Botoes>
              <button
                type="button"
                className='btnCancelar'
                onClick={() => navigate('/perfil')}
              >
                Cancelar
              </button>

              <button type="submit" className='btnSalvar'>
                Salvar
              </button>
            </Botoes>
          </form>
        </Container>
      </OuterContainer>

      <Footer />
    </>
  );
};

export default UserProfileEdit;