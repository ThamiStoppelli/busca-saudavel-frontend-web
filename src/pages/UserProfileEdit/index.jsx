import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import semImagem from '../../assets/images/sem-imagem.png';
import EditIcon from '../../assets/icons/edit.svg';
import { OuterContainer, Container, Content, ContainerNome, ContainerConteudo, Botoes } from './styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfileEdit = () => {
  const { token, user, setUser, initialToken, userType } = useContext(AuthContext)
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const [image, setImage] = useState()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [localizacao, setLocalizacao] = useState('');


  function getInfoPerfil() {
    api
      .get(`/user/get/${user._id}`)
      .then(res => {
        setUserInfo(res.data)
        setName(res.data.name)
        setEmail(res.data.email)
        setDataNascimento(res.data.birth_date)
        setLocalizacao(res.data.location)
        setImage(res.data.image)
      })
      .catch(e => {
        console.log(e.message)
      })
  }

  useEffect(() => {
    getInfoPerfil();
  }, [])

  function atualizar() {

    const formData = new FormData();
    formData.append("name", name);
    formData.append("birth_date", dataNascimento);
    formData.append("location", localizacao);
    formData.append("image", image);

    api
      .put(`/user/update/${user._id}`,
        formData,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
      .then(res => {
        toast.success('Perfil editado com sucesso')
        const myTimeout = setTimeout(navigate('/perfil'), 3000)
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  return (
    <>
      <Header />
      <OuterContainer>
        <Container>
          <ContainerNome>
            <span style={{ width: '1rem' }} />
            <p>Editar perfil</p>
            <span style={{ width: '1rem' }} />
          </ContainerNome>
          <ContainerConteudo>
            <div className="image-div">

              <div className='containerImage'>
                {image ?
                  <img src={`data:image/png;base64,${image}`} alt='' />
                  :
                  <img src={semImagem} alt='' />
                }
              </div>
              <input type="file" id="image" className='image-input'
                onChange={(event) => {
                  console.log(event.target.files[0])
                  setImage(event.target.files[0]);
                }}
              />
            </div>
            <Content>
              <div>
                <p className='bold'>Nome</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <p className='bold'>E-mail</p>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <p className='bold'>Data de aniversário</p>
                <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                <p className='bold'>Cidade</p>
                <input type="text" value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} />
              </div>
            </Content>
          </ContainerConteudo>
        </Container>
        <Botoes>
          <p className='btnCancelar' onClick={() => navigate('/perfil')}>Cancelar</p>
          <p className='btnSalvar' onClick={() => { atualizar() }}>Salvar</p>
        </Botoes>
      </OuterContainer>
      <Footer />
    </>
  )
}

export default UserProfileEdit;