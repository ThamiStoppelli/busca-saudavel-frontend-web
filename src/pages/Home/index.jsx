import React, { useState, useEffect, useContext, useMemo } from 'react';

import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tag from '../../components/Tag';
import CardProduto from '../../components/CardProduto';
import Paginacao from '../../components/Paginacao';
import ModalLogin from '../../components/ModalLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  ContainerBusca,
  ContainerTags,
  ContainerProdutos,
  ContainerPaginacao,
  SearchSummary,
  EmptyState,
} from './styles';

const tagConfig = [
  { key: 'lactose', label: 'Lactose', ref: 'ref_1' },
  { key: 'amendoim', label: 'Amendoim', ref: 'ref_2' },
  { key: 'gluten', label: 'Glúten', ref: 'ref_3' },
  { key: 'acucar', label: 'Açúcar', ref: 'ref_4' },
  { key: 'mariscos', label: 'Mariscos', ref: 'ref_5' },
  { key: 'ovo', label: 'Ovo', ref: 'ref_6' },
  { key: 'origemAnimal', label: 'Origem Animal', ref: 'ref_7' },
];

const initialTags = tagConfig.reduce((acc, tag) => ({ ...acc, [tag.key]: false }), {});

const Home = () => {
  const { token, user, userType } = useContext(AuthContext);

  const [pesquisa, setPesquisa] = useState('');
  const [activeTags, setActiveTags] = useState(initialTags);
  const [produtos, setProdutos] = useState([]);
  const [showModalLogin, setModalLogin] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [qtdItensPagina] = useState(8);
  const [favoritedProducts, setFavoritedProducts] = useState({});
  const [loadingProducts, setLoadingProducts] = useState(false);

  const selectedTags = useMemo(
    () => tagConfig.filter((tag) => activeTags[tag.key]),
    [activeTags]
  );

  const indexOfLastRecord = paginaAtual * qtdItensPagina;
  const indexOfFirstRecord = indexOfLastRecord - qtdItensPagina;
  const currentProducts = produtos.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(produtos.length / qtdItensPagina);

  const toggleTag = (key) => {
    setActiveTags((current) => ({ ...current, [key]: !current[key] }));
  };

  const normalizeText = (text) => (text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const filterBySearch = (products, searchTerm) => {
    const normalizedSearch = normalizeText(searchTerm);
    if (!normalizedSearch) return products;

    return products.filter((product) =>
      normalizeText([
        product.name,
        product.brand,
        product.description,
        product.ingredients,
      ].join(' ')).includes(normalizedSearch)
    );
  };

  function fetchProducts() {
    setLoadingProducts(true);

    const hasSelectedTags = selectedTags.length > 0;
    const tagQuery = tagConfig
      .map((tag) => `${tag.ref}=${activeTags[tag.key]}`)
      .join('&');

    const endpoint = hasSelectedTags
      ? `/product/search_by_tag?${tagQuery}&`
      : `/product/search?search=${pesquisa}`;

    api
      .get(endpoint)
      .then((res) => {
        const products = hasSelectedTags ? filterBySearch(res.data, pesquisa) : res.data;
        setProdutos(products);
        setPaginaAtual(1);
      })
      .catch((e) => {
        console.error(e.message);
      })
      .finally(() => setLoadingProducts(false));
  }

  function todosFavoritos() {
    if (!user?._id) return;

    api
      .get(`/user/get_favorite_products/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const favorites = {};
        res.data.forEach((produto) => {
          favorites[produto._id] = true;
        });
        setFavoritedProducts(favorites);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 250);

    return () => clearTimeout(timer);
  }, [pesquisa, activeTags]);

  useEffect(() => {
    if (token) todosFavoritos();
  }, [token, user?._id]);

  const handleSetModalLogin = () => {
    setModalLogin(!showModalLogin);
  };

  function handleFavorite(produtoId) {
    if (userType === 0 || userType === 2) {
      if (favoritedProducts[produtoId]) {
        api
          .put(
            `/user/remove_favorite_product/${user._id}`,
            { product_id: produtoId },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then(() => {
            toast.success('Produto removido dos favoritos com sucesso');
            setFavoritedProducts((prevState) => ({
              ...prevState,
              [produtoId]: false,
            }));
          })
          .catch((err) => {
            console.log(err.msg);
          });
      } else {
        api
          .put(
            `/user/add_favorite_product/${user._id}`,
            { product_id: produtoId },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then(() => {
            toast.success('Produto adicionado aos favoritos com sucesso');
            setFavoritedProducts((prevState) => ({
              ...prevState,
              [produtoId]: true,
            }));
          })
          .catch((err) => {
            console.log(err.msg);
          });
      }
    } else {
      handleSetModalLogin();
    }
  }

  return (
    <>
      <Header />
      <Container>
        <section className="hero-search">
          <p className="eyebrow">Busca Saudável</p>
          <h2>A plataforma para encontrar alimentos alinhados às suas escolhas nutricionais.</h2>
          <p className="subtitle">Pesquise por produto, marca ou selecione uma ou mais restrições alimentares.</p>
        </section>

        <ContainerBusca>
          <input
            type="text"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="Busque pelo nome, marca ou ingrediente"
            aria-label="Buscar produtos"
          />
          <ContainerTags aria-label="Filtros por restrição alimentar">
            {tagConfig.map((tag) => (
              <Tag
                key={tag.key}
                dados={tag.label}
                status={activeTags[tag.key]}
                setStatus={() => toggleTag(tag.key)}
              />
            ))}
          </ContainerTags>
        </ContainerBusca>

        <SearchSummary id="pontoChave">
          <strong>{produtos.length}</strong> produto{produtos.length === 1 ? '' : 's'} encontrado{produtos.length === 1 ? '' : 's'}
          {pesquisa ? <> para “{pesquisa}”</> : null}
          {selectedTags.length ? <> com {selectedTags.map((tag) => tag.label).join(', ')}</> : null}
        </SearchSummary>

        {loadingProducts ? (
          <EmptyState>Carregando produtos...</EmptyState>
        ) : produtos.length ? (
          <ContainerProdutos>
            {currentProducts.map((produto) => (
              <CardProduto
                key={produto._id}
                dados={produto}
                clickFavorite={() => handleFavorite(produto._id)}
                favorite={favoritedProducts[produto._id] || false}
              />
            ))}
          </ContainerProdutos>
        ) : (
          <EmptyState>Nenhum produto encontrado. Tente remover filtros ou buscar por outro termo.</EmptyState>
        )}

        {nPages > 1 ? (
          <ContainerPaginacao>
            <Paginacao
              nPages={nPages}
              paginaAtual={paginaAtual}
              setPaginaAtual={setPaginaAtual}
            />
          </ContainerPaginacao>
        ) : null}

        {showModalLogin && <ModalLogin onClick={handleSetModalLogin} />}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
