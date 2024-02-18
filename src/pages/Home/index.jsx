import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tag from '../../components/Tag';
import CardProduto from '../../components/CardProduto';
import Paginacao from '../../components/Paginacao';
import ModalLogin from '../../components/ModalLogin';
import notFavorited from '../../assets/icons/not-favorited.png';
import favorited from '../../assets/icons/favorited.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, ContainerBusca, ContainerTags, ContainerProdutos, ContainerPaginacao, BotaoTag } from './styles'

const Home = () => {

  const { token, user, initialToken, userType, logout } = useContext(AuthContext)

  const [pesquisa, setPesquisa] = useState("");
  const [lactoseAtivo, setLactoseAtivo] = useState(false);
  const [amendoimAtivo, setAmendoimAtivo] = useState(false);
  const [glutenAtivo, setGlutenAtivo] = useState(false);
  const [acucarAtivo, setAcucarAtivo] = useState(false);
  const [mariscosAtivo, setMariscosAtivo] = useState(false);
  const [ovoAtivo, setOvoAtivo] = useState(false);
  const [origemAnimalAtivo, setOrigemAnimalAtivo] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [showModalLogin, setModalLogin] = useState(false);

  const [paginaAtual, setPaginaAtual] = useState(1)
  const [qtdItensPagina] = useState(8);
  const indexOfLastRecord = paginaAtual * qtdItensPagina;
  const indexOfFirstRecord = indexOfLastRecord - qtdItensPagina;
  const currentProducts = produtos.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(produtos.length / qtdItensPagina);
  const [favoritedProducts, setFavoritedProducts] = useState({});


  function buscarProdutos(event, pesquisa) {
    if (event.key === 'Enter') {
      todosProdutos();
      //buscarTags();
    }
  }

  function buscarTags() {
    api
      .get(`/product/search_by_tag?ref_1=${lactoseAtivo}&ref_2=${amendoimAtivo}&ref_3=${glutenAtivo}&ref_4=${acucarAtivo}&ref_5=${mariscosAtivo}&ref_6=${ovoAtivo}&ref_7=${origemAnimalAtivo}&`)
      .then(res => {
        setProdutos(res.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  function todosProdutos() {
    api
      .get(`/product/search?search=${pesquisa}`)
      .then(res => {
        setProdutos(res.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  function todosFavoritos() {
    api
      .get(`/user/get_favorite_products/${user._id}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      })
      .then(res => {
        res.data.map(produto => {
          setFavoritedProducts((prevState) => ({
            ...prevState,
            [produto._id]: true,
          }));
        })
        console.log(favoritedProducts)
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  useEffect(() => {
    todosProdutos();
    console.log(userType)
    if (token) todosFavoritos();


  }, [])

  const handleSetModalLogin = () => {
    setModalLogin(!showModalLogin);
  };

  function handleFavorite(produtoId) {
    if (userType == 0 || userType == 2) {
      if (favoritedProducts[produtoId]) {
        api.put(
            `/user/remove_favorite_product/${user._id}`,
            { product_id: produtoId },
            { headers: { Authorization: `Bearer ${token}` } }
          ).then((res) => {
            console.log(res.data);
            toast.success('Produto removido dos favoritos com sucesso');
            setFavoritedProducts((prevState) => ({
              ...prevState,
              [produtoId]: false,
            }));
          }).catch((err) => {
            console.log(err.msg);
          });
      } else {
        api.put(
            `/user/add_favorite_product/${user._id}`,
            { product_id: produtoId },
            { headers: { Authorization: `Bearer ${token}` } }
          ).then((res) => {
            console.log(res.data);
            toast.success('Produto adicionado aos favoritos com sucesso');
            setFavoritedProducts((prevState) => ({
              ...prevState,
              [produtoId]: true,
            }));
          }).catch((err) => {
            console.log(err.msg);
          });
      } 
    } else {
      handleSetModalLogin();
    } }

    return (
      <>
        <Header />
        <Container>
          <h2> A plataforma de busca para <br />facilitar suas escolhas nutricionais.</h2>
          <ContainerBusca>
            <input type="text" value={pesquisa} onKeyUp={(e) => buscarProdutos(e, pesquisa)} onChange={(e) => setPesquisa(e.target.value)} placeholder="Busque pelo nome ou marca do produto" />
            <ContainerTags>
              <Tag dados="Lactose" status={lactoseAtivo} setStatus={setLactoseAtivo} />
              <Tag dados="Amendoim" status={amendoimAtivo} setStatus={setAmendoimAtivo} />
              <Tag dados="Glúten" status={glutenAtivo} setStatus={setGlutenAtivo} />
              <Tag dados="Açúcar" status={acucarAtivo} setStatus={setAcucarAtivo} />
              <Tag dados="Mariscos" status={mariscosAtivo} setStatus={setMariscosAtivo} />
              <Tag dados="Ovo" status={ovoAtivo} setStatus={setOvoAtivo} />
              <Tag dados="Origem Animal" status={origemAnimalAtivo} setStatus={setOrigemAnimalAtivo} />
              <BotaoTag onClick={() => buscarTags()}><span>Buscar por Tag's</span></BotaoTag>
            </ContainerTags>
          </ContainerBusca>
          <p id="pontoChave">Produtos com: {pesquisa}</p>
          <ContainerProdutos>
            {currentProducts ? currentProducts.map(produto => {
              return (
                <CardProduto
                  key={produto._id}
                  dados={produto}
                  clickFavorite={() => handleFavorite(produto._id)}
                  favorite={favoritedProducts[produto._id] || false}
                //checar se usuario esta logado
                />
              )
            }) : null}
          </ContainerProdutos>
          <ContainerPaginacao>
            <Paginacao
              nPages={nPages}
              paginaAtual={paginaAtual}
              setPaginaAtual={setPaginaAtual} />
          </ContainerPaginacao>
          {showModalLogin && (
            <ModalLogin
              onClick={handleSetModalLogin}
            />
          )}
        </Container>
        <Footer />
      </>
    )
  }

  export default Home;