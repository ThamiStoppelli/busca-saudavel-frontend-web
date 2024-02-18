import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardDicas from '../../components/CardDicas';
import Tag from '../../components/Tag';
import ModalLogin from '../../components/ModalLogin';

import { Container, ContainerBusca, ContainerTags } from './styles'

const Dicas = () => {
  const [pesquisa, setPesquisa] = useState("");
  const [lactoseAtivo, setLactoseAtivo] = useState(false);
  const [amendoimAtivo, setAmendoimAtivo] = useState(false);
  const [glutenAtivo, setGlutenAtivo] = useState(false);
  const [acucarAtivo, setAcucarAtivo] = useState(false);
  const [mariscosAtivo, setMariscosAtivo] = useState(false);
  const [ovoAtivo, setOvoAtivo] = useState(false);
  const [origemAnimalAtivo, setOrigemAnimalAtivo] = useState(false);
  const [showModalLogin, setModalLogin] = useState(false);

  let dadosCardDicas = {
    titulo: 'Alimentos com cálcio',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis tempus ut scelerisque feugiat pulvinar aliquam placerat purus nec. Leo, eu eleifend libero pulvinar urna ullamcorper lobortis nisl. Integer pulvinar tellus scelerisque maecenas at nam nunc tortor fusce. Tellus, ultrices id curabitur lacus, aliquam id velit adipiscing pulvinar. Sit at volutpat diam id. Vel ac elit, malesuada laoreet tristique eu diam proin. Id quis eget odio vitae interdum. Sed pellentesque fermentum justo, felis pulvinar leo suspendisse. Malesuada venenatis, quam libero, eget scelerisque. Sapien, faucibus fermentum donec gravida. Nullam est urna feugiat luctus egestas eros. Adipiscing blandit nunc massa feugiat in egestas commodo. Viverra porta amet sit porttitor dui tristique arcu. ',
    imagemDica: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2020/12/23182247/shutterstock_371429881-1.jpg',
    nutri: 'Ana Pontes de Albuquerque',
    imagemNutri: 'https://img.picsize.com.br/uploads/customer/532/picture/22813/1052555/foto-ensaio-profissional-belo-horizonte-taynara-01.jpeg',
    tags: {
      tag1: 'Lactose',
      tag2: 'Amendoim'
    }
  }

  const handleSetModalLogin = () => {
    setModalLogin(!showModalLogin);
  };

  return (
    <>
      <Header />
      <Container>
        <h2> Dicas de Alimentação Saudável</h2>
        <ContainerBusca>
          <ContainerTags>
            <Tag dados="Lactose" status={lactoseAtivo} setStatus={setLactoseAtivo} />
            <Tag dados="Amendoim" status={amendoimAtivo} setStatus={setAmendoimAtivo} />
            <Tag dados="Glúten" status={glutenAtivo} setStatus={setGlutenAtivo} />
            <Tag dados="Açúcar" status={acucarAtivo} setStatus={setAcucarAtivo} />
            <Tag dados="Mariscos" status={mariscosAtivo} setStatus={setMariscosAtivo} />
            <Tag dados="Ovo" status={ovoAtivo} setStatus={setOvoAtivo} />
            <Tag dados="Origem Animal" status={origemAnimalAtivo} setStatus={setOrigemAnimalAtivo} />
          </ContainerTags>
          <input type="text" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="Busque pelo nome" />
        </ContainerBusca>
        {/* integrar, fazer .map */}
        <CardDicas
          dados={dadosCardDicas}
          clickFavorite={handleSetModalLogin}
        />
        <CardDicas
          dados={dadosCardDicas}
          clickFavorite={handleSetModalLogin}
        />

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

export default Dicas;