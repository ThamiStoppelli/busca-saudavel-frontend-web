import React, { useState, useEffect, useContext } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';
import CardProdutoFornecedor from '../../components/CardProdutoFornecedor';
import Footer from '../../components/Footer';
import Plus from '../../assets/icons/plus.svg';
import { AuthContext } from '../../context/auth';
import { AddProduct } from '../../components/AddProduct';

import { Container, ContainerBusca, ContainerProdutos } from './styles'

const Products = () => {
  const { token, user, initialToken, userType, produtos, setProdutos } = useContext(AuthContext)
  const [pesquisa, setPesquisa] = useState("");
  const [showAddProduct, setAddProduct] = useState(false);

  function buscarProdutos(event, pesquisa) {
    if (event.key === 'Enter') {
      todosProdutos();
    }
  }

  function todosProdutos() {
    api
      .get(`/product/search_in_brand?brand=${user.name}&search=${pesquisa}`)
      .then(res => {
        setProdutos(res.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  useEffect(() => {
    todosProdutos();
  }, [produtos])

  const handleSetAddProduct = () => {
    setAddProduct(!showAddProduct);
  };
  
  return (
    <>
      <Header />
      <Container>
        <h2>Produtos</h2>
        {user ?
          <>
            <ContainerBusca>
              <input type="text" value={pesquisa} onKeyUp={(e) => buscarProdutos(e, pesquisa)} onChange={(e) => setPesquisa(e.target.value)} placeholder="Busque pelo nome do produto" />
              <div onClick={handleSetAddProduct}>
                <img src={Plus} alt="" />
                <p>Cadastrar produto</p>
              </div>
            </ContainerBusca>
            <ContainerProdutos>
              {produtos ? produtos.map(produto => {
                return (
                  <CardProdutoFornecedor dados={produto} key={produto._id} />
                )
              }) : null}
            </ContainerProdutos>
          </>
          : null}

        {showAddProduct && (
          <AddProduct
            onClick={handleSetAddProduct}
          />
        )}

      </Container>
      <Footer />
    </>
  )
}

export default Products;