import React, { useMemo, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardDicas from '../../components/CardDicas';
import Tag from '../../components/Tag';
import ModalLogin from '../../components/ModalLogin';

import { Container, ContainerBusca, ContainerTags, ContainerCards } from './styles';

const dicasMock = [
  {
    id: 1,
    titulo: 'Alimentos ricos em cálcio sem lactose',
    texto: 'O cálcio é essencial para ossos, dentes e contração muscular. Para quem evita lactose, boas opções incluem vegetais verde-escuros, gergelim, tahine, tofu com cálcio, sardinha e bebidas vegetais fortificadas. O ideal é combinar fontes diferentes ao longo do dia.',
    imagemDica: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2020/12/23182247/shutterstock_371429881-1.jpg',
    nutri: 'Ana Pontes de Albuquerque',
    imagemNutri: 'https://img.picsize.com.br/uploads/customer/532/picture/22813/1052555/foto-ensaio-profissional-belo-horizonte-taynara-01.jpeg',
    tags: ['Lactose', 'Origem Animal']
  },
  {
    id: 2,
    titulo: 'Como montar um lanche sem glúten',
    texto: 'Um lanche sem glúten pode ser simples e nutritivo quando a base vem de alimentos naturalmente livres de glúten. Frutas, ovos, iogurtes, castanhas, tapioca, arroz, milho e raízes são boas opções. O ponto principal é checar rótulos para evitar contaminação cruzada.',
    imagemDica: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
    nutri: 'Marina Lopes',
    imagemNutri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    tags: ['Glúten']
  },
  {
    id: 3,
    titulo: 'Atenção aos açúcares escondidos',
    texto: 'Nem todo açúcar aparece no rótulo com esse nome. Ingredientes como xarope de glicose, maltodextrina, dextrose, sacarose e açúcar invertido também indicam fontes de açúcar. Ler a lista de ingredientes ajuda a fazer escolhas mais conscientes.',
    imagemDica: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    nutri: 'Carolina Mendes',
    imagemNutri: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
    tags: ['Açúcar']
  }
];

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

  const tagsSelecionadas = useMemo(() => {
    const tags = [];

    if (lactoseAtivo) tags.push('Lactose');
    if (amendoimAtivo) tags.push('Amendoim');
    if (glutenAtivo) tags.push('Glúten');
    if (acucarAtivo) tags.push('Açúcar');
    if (mariscosAtivo) tags.push('Mariscos');
    if (ovoAtivo) tags.push('Ovo');
    if (origemAnimalAtivo) tags.push('Origem Animal');

    return tags;
  }, [
    lactoseAtivo,
    amendoimAtivo,
    glutenAtivo,
    acucarAtivo,
    mariscosAtivo,
    ovoAtivo,
    origemAnimalAtivo
  ]);

  const dicasFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    return dicasMock.filter((dica) => {
      const combinaPesquisa =
        !termo ||
        dica.titulo.toLowerCase().includes(termo) ||
        dica.texto.toLowerCase().includes(termo) ||
        dica.nutri.toLowerCase().includes(termo);

      const combinaTags =
        tagsSelecionadas.length === 0 ||
        tagsSelecionadas.every((tag) => dica.tags.includes(tag));

      return combinaPesquisa && combinaTags;
    });
  }, [pesquisa, tagsSelecionadas]);

  const handleSetModalLogin = () => {
    setModalLogin(!showModalLogin);
  };

  return (
    <>
      <Header />

      <Container>
        <section className="hero">
          <h2>Dicas de alimentação saudável</h2>
          <p>
            Conteúdos simples para ajudar você a escolher melhor seus alimentos,
            entender rótulos e lidar com restrições alimentares no dia a dia.
          </p>
        </section>

        <ContainerBusca>
          <input
            type="text"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="Busque por tema, alimento ou nutricionista"
          />

          <ContainerTags>
            <Tag dados="Lactose" status={lactoseAtivo} setStatus={setLactoseAtivo} />
            <Tag dados="Amendoim" status={amendoimAtivo} setStatus={setAmendoimAtivo} />
            <Tag dados="Glúten" status={glutenAtivo} setStatus={setGlutenAtivo} />
            <Tag dados="Açúcar" status={acucarAtivo} setStatus={setAcucarAtivo} />
            <Tag dados="Mariscos" status={mariscosAtivo} setStatus={setMariscosAtivo} />
            <Tag dados="Ovo" status={ovoAtivo} setStatus={setOvoAtivo} />
            <Tag dados="Origem Animal" status={origemAnimalAtivo} setStatus={setOrigemAnimalAtivo} />
          </ContainerTags>

          <p className="resultCount">
            {dicasFiltradas.length} {dicasFiltradas.length === 1 ? 'dica encontrada' : 'dicas encontradas'}
          </p>
        </ContainerBusca>

        <ContainerCards>
          {dicasFiltradas.length > 0 ? (
            dicasFiltradas.map((dica) => (
              <CardDicas
                key={dica.id}
                dados={dica}
                clickFavorite={handleSetModalLogin}
              />
            ))
          ) : (
            <div className="emptyState">
              <h3>Nenhuma dica encontrada</h3>
              <p>Tente remover alguns filtros ou buscar por outro termo.</p>
            </div>
          )}
        </ContainerCards>

        {showModalLogin && (
          <ModalLogin onClick={handleSetModalLogin} />
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Dicas;