import { useState, useContext, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from "../../services/api";
import { AuthContext } from '../../context/auth';
import SmallTag from '../../components/SmallTag';
import Etapa1 from '../../assets/icons/etapa1.svg'
import Etapa2 from '../../assets/icons/etapa2.svg'
import ImageTemplate from '../../assets/images/img-produto-exemplo.png'

import { Container, ContainerCard, ContainerTags, Buttons } from './styles'

export const AddProduct = ({ onClick }) => {

  const { token, user, produtos, setProdutos } = useContext(AuthContext);
  const params = useParams();
  const navigate = useNavigate();
  const [modalInicial, setModalInicial] = useState(true);

  const [lactoseAtivo, setLactoseAtivo] = useState(false);
  const [amendoimAtivo, setAmendoimAtivo] = useState(false);
  const [glutenAtivo, setGlutenAtivo] = useState(false);
  const [acucarAtivo, setAcucarAtivo] = useState(false);
  const [mariscosAtivo, setMariscosAtivo] = useState(false);
  const [ovoAtivo, setOvoAtivo] = useState(false);
  const [origemAnimalAtivo, setOrigemAnimalAtivo] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const [nome, setNome] = useState('');
  const [image, setImage] = useState()
  const [ingredientes, setIngredientes] = useState('');
  const [descricao, setDescricao] = useState('');
  const [qtd, setQtd] = useState('');
  const [energetico, setEnergetico] = useState('');
  const [gorduraTotal, setGorduraTotal] = useState('');
  const [gorduraSaturada, setGorduraSaturada] = useState('');
  const [gorduraTrans, setGorduraTrans] = useState('');
  const [minerais, setMinerais] = useState('');
  const [sodio, setSodio] = useState('');
  const [carboidrato, setCarboidrato] = useState('');
  const [proteina, setProteina] = useState('');
  const [fibra, setFibra] = useState('');
  const [vitamina, setVitamina] = useState('');
  const [podeConter, setPodeConter] = useState('may_contain');

  const [produto, setProduto] = useState();
  const toastId = useRef(null)

  useEffect(() => {
    console.log(selectedTags);
  }, [selectedTags])

  const createProduct = async (field) => {

    field.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", nome);
    formData.append("description", descricao);
    formData.append("brand", user.name);
    formData.append("ingredients", ingredientes);
    formData.append("tags", JSON.stringify(selectedTags));
    formData.append("nutrition_facts", JSON.stringify({
      serving_size: qtd,
      energy_value: energetico,
      carbohydrate: carboidrato,
      protein: proteina,
      total_fat: gorduraTotal,
      fat_saturated: gorduraSaturada,
      fat_trans: gorduraTrans,
      fiber: fibra,
      sodium: sodio,
      minerals: minerais,
      vitamins: vitamina
    }));
    formData.append("may_contain", podeConter);

    const newProduct = {
      name: nome,
      description: descricao,
      image: formData.get("image"),
      brand: user.name,
      ingredients: ingredientes,
      nutrition_facts: JSON.stringify({
        serving_size: qtd,
        energy_value: energetico,
        carbohydrate: carboidrato,
        protein: proteina,
        total_fat: gorduraTotal,
        fat_saturated: gorduraSaturada,
        fat_trans: gorduraTrans,
        fiber: fibra,
        sodium: sodio,
        minerals: minerais,
        vitamins: vitamina
      }),
      may_contain: podeConter,
      tags: selectedTags,
    };

    await api.post(`/product/create/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: newProduct
    }).then(res => {

      console.log(res.data)
      toast.success("Produto cadastrado com sucesso")

      onClick();

      api
        .get(`/product/search?search=${user.name}`)
        .then(res => {
          setProdutos(res.data)
        })
        .catch(e => {
          console.log(e.message)
        })

    }).catch((err) => {
      console.log(err)
      toast.error("Preencha todos os dados obrigatórios para cadastrar o produto")
    })
  };


  useEffect(() => {
  })

  return (

    <Container>
      <ContainerCard>
        <h3>Cadastrar produto</h3>

        <form onSubmit={createProduct}>

          {modalInicial ?
            <>
              <div className="info">
                <label>Nome do produto</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setNome(event.target.value);
                  }}
                  value={nome}
                  placeholder={"Informe o nome do produto"}
                />
              </div>

              <div className="info">
                <label> Selecione os alergênicos que o produto <b>não</b> contém</label>
                <ContainerTags>
                  <SmallTag
                    id="656e47c92e250b8827766157"
                    dados="Lactose" status={lactoseAtivo} setStatus={setLactoseAtivo}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                  />
                  <SmallTag
                    id="656e47c92e250b8827766158"
                    dados="Amendoim" status={amendoimAtivo} setStatus={setAmendoimAtivo}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                  />
                  <SmallTag
                    id="656e47c92e250b8827766159"
                    dados="Glúten" status={glutenAtivo} setStatus={setGlutenAtivo}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                  />
                  <SmallTag
                    id="656e47c92e250b882776615a"
                    dados="Açúcar" status={acucarAtivo} setStatus={setAcucarAtivo}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                  />
                  <SmallTag
                    id="656e47c92e250b882776615b"
                    dados="Mariscos" status={mariscosAtivo} setStatus={setMariscosAtivo}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                  />
                  <SmallTag
                    id="656e47c92e250b882776615c"
                    dados="Ovo" status={ovoAtivo} setStatus={setOvoAtivo}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                  />
                  <SmallTag
                    id="656e47c92e250b882776615d"
                    dados="Origem Animal" status={origemAnimalAtivo} setStatus={setOrigemAnimalAtivo}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                  />
                </ContainerTags>
              </div>

              <div className="info">
                <label>Anexos</label>
                <input type="file" id="image"
                  onChange={(event) => {
                    console.log(event.target.files[0])
                    setImage(event.target.files[0]);
                  }}
                />
              </div>

              <div className="info">
                <label>Ingredientes</label>
                <textarea rows="4" cols="50"
                  type="text"
                  onChange={(event) => {
                    setIngredientes(event.target.value);
                  }}
                  value={ingredientes}
                  placeholder={"Informe os ingredientes do produto"}
                  className="textarea"
                />
              </div>

              <div className="info">
                <div>
                  <label>Descrição</label>
                  <label className="optional">(Opcional)</label>
                </div>
                <textarea rows="4" cols="50"
                  type="text"
                  onChange={(event) => {
                    setDescricao(event.target.value);
                  }}
                  value={descricao}
                  placeholder={"Escreva uma descrição para o produto"}
                  className="textarea"
                />
              </div>

              <span>
                <img src={Etapa1} />
                <Buttons>
                  <p onClick={onClick}>Cancelar</p>
                  <button onClick={() => {
                    setModalInicial(false)
                    console.log(selectedTags)
                  }}>Próximo</button>
                </Buttons>
              </span>
            </>
            :
            <>
              <label>Tabela nutricional</label>

              <div className="elementos-tabela">
                <label>Quantidade da porção</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setQtd(event.target.value);
                  }}
                  value={qtd}
                  placeholder={"Informe o valor nutritivo"}
                />
              </div>
              <div className="elementos-tabela">
                <label>Valor Energético</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setEnergetico(event.target.value);
                  }}
                  value={energetico}
                  placeholder={"0 kcal"}
                />
              </div>
              <div className="elementos-tabela">
                <label>Carboidratos</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setCarboidrato(event.target.value);
                  }}
                  value={carboidrato}
                  placeholder={"0 g"}
                />
              </div>
              <div className="elementos-tabela">
                <label>Proteínas</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setProteina(event.target.value);
                  }}
                  value={proteina}
                  placeholder={"0 g"}
                />
              </div>
              <div className="elementos-tabela">
                <label>Gorduras Totais</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setGorduraTotal(event.target.value);
                  }}
                  value={gorduraTotal}
                  placeholder={"0 g"}
                />
              </div>
              <div className="elementos-tabela">
                <label>Gorduras Saturadas</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setGorduraSaturada(event.target.value);
                  }}
                  value={gorduraSaturada}
                  placeholder={"0 g"}
                />
              </div>
              <div className="elementos-tabela">
                <label>Gorduras Trans</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setGorduraTrans(event.target.value);
                  }}
                  value={gorduraTrans}
                  placeholder={"0 g"}
                />
              </div>
              <div className="elementos-tabela">
                <label>Fibra Alimentar</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setFibra(event.target.value);
                  }}
                  value={fibra}
                  placeholder={"0 g"}
                />
              </div>
              <div className="elementos-tabela">
                <label>Sódio</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setSodio(event.target.value);
                  }}
                  value={sodio}
                  placeholder={"0 g"}
                />
              </div>
              <div className="elementos-tabela">
                <label>Outros Minerais</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setMinerais(event.target.value);
                  }}
                  value={minerais}
                  placeholder={"0 g"}
                />
              </div>
              <div className="elementos-tabela">
                <label>Vitaminas</label>
                <input
                  type="name"
                  onChange={(event) => {
                    setVitamina(event.target.value);
                  }}
                  value={vitamina}
                  placeholder={"0 g"}
                />
              </div>

              <span>
                <img src={Etapa2} />
                <Buttons>
                  <p onClick={() => {
                    setModalInicial(true)
                  }}>Voltar</p>
                  <button type="submit">Cadastrar</button>
                </Buttons>
              </span>

            </>
          }
        </form>
      </ContainerCard>
    </Container>
  );
};