import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CardProduto from '../../components/CardProduto';

import { Container, ContainerProdutos } from './styles'
import { toast } from 'react-toastify';

const Favorites = () => {

    const { token, user, initialToken, userType, logout } = useContext(AuthContext)
    const [favoritedProducts, setFavoritedProducts] = useState([]);

    const [pesquisa, setPesquisa] = useState("");
    const [paginaAtual, setPaginaAtual] = useState(1)
    const [qtdItensPagina] = useState(8);
    const indexOfLastRecord = paginaAtual * qtdItensPagina;
    const indexOfFirstRecord = indexOfLastRecord - qtdItensPagina;
    const currentProducts = favoritedProducts.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(favoritedProducts.length / qtdItensPagina);


    function produtosFavoritos() {
        api
            .get(`/user/get_favorite_products/${user._id}`)
            .then(res => {
                setFavoritedProducts(res.data)
            })
            .catch(e => {
                console.error(e.message)
            })
    }


    useEffect(() => {
        produtosFavoritos();
    }, [])

    function handleUnfavorite(produtoId) {
        api.put(`/user/remove_favorite_product/${user._id}`,
            { product_id: produtoId },
            {
                headers: { Authorization: `Bearer ${token}`, }
            }).then(res => {
                console.log(res.data)
                toast.success("Produto removido dos favoritos com sucesso")

                api
            .get(`/user/get_favorite_products/${user._id}`)
            .then(res => {
                setFavoritedProducts(res.data)
            })
            .catch(e => {
                console.error(e.message)
            })
            }).catch((err) => {
                console.log(err.msg)
            })
    }

    return (
        <>
            <Header />
            <Container>
                <h2>Favoritos</h2>
                <ContainerProdutos>
                    {currentProducts ? currentProducts.map(produto => {
                        return (
                            <CardProduto
                                key={produto._id}
                                dados={produto}
                                clickFavorite={() => handleUnfavorite(produto._id)}
                                favorite={true}
                            //checar se usuario esta logado
                            />
                        )
                    }) : null}
                </ContainerProdutos>
            </Container>
            <Footer />
        </>
    )
}

export default Favorites;