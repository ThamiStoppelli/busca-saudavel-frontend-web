import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import PopUpDeletarProduto from '../../components/PopUpDeletarProduto';
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import Tag from '../../components/Tag';
import Voltar from '../../assets/icons/anterior-preto.svg';
import { getImageSource, fileToDataUrl } from '../../utils/image';
import trash from '../../assets/icons/trash.svg';
import { Container, Breadcrumb, ContainerProduto, ContainerNome, DadosProduto, DadosProdutoInfo, PrimeiraParte, SegundaParte, TerceiraParte, Botoes } from './styles'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductEdit = () => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext)
  const params = useParams();
  const [popUp, setPopUp] = useState(false);
  const [produto, setProduto] = useState();
  const [nome, setNome] = useState('');
  const [image, setImage] = useState('')
  const [ingredientes, setIngredientes] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tags, setTags] = useState([]);
  const [qtd, setQtd] = useState('');
  const [energetico, setEnergetico] = useState('');
  const [carboidrato, setCarboidrato] = useState('');
  const [proteina, setProteina] = useState('');
  const [gorduraTotal, setGorduraTotal] = useState('');
  const [gorduraSaturada, setGorduraSaturada] = useState('');
  const [gorduraTrans, setGorduraTrans] = useState('');
  const [fibra, setFibra] = useState('');
  const [sodio, setSodio] = useState('');
  const [minerais, setMinerais] = useState('');
  const [vitamina, setVitamina] = useState('');

  function Redirecionar(id) {
    navigate(`/produto/${id}`);
  }

  useEffect(() => {
    console.log(token);
  }, [])

  function getProduto() {
    api
      .get(`/product/get/${params.id}`)
      .then(res => {
        setProduto(res.data)
        setNome(res.data.name)
        setIngredientes(res.data.ingredients)
        setDescricao(res.data.description)
        setQtd(res.data.nutrition_facts.serving_size)
        setEnergetico(res.data.nutrition_facts.energy_value)
        setCarboidrato(res.data.nutrition_facts.carbohydrate)
        setProteina(res.data.nutrition_facts.protein)
        setGorduraTotal(res.data.nutrition_facts.total_fat)
        setGorduraSaturada(res.data.nutrition_facts.fat_saturated)
        setGorduraTrans(res.data.nutrition_facts.fat_trans)
        setFibra(res.data.nutrition_facts.fiber)
        setSodio(res.data.nutrition_facts.sodium)
        setMinerais(res.data.nutrition_facts.minerals)
        setVitamina(res.data.nutrition_facts.vitamins)
        setTags(res.data.tags)
        setImage(res.data.image_url || res.data.image || '')
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  async function atualizar() {

    const imageData = image instanceof File ? await fileToDataUrl(image) : image;
    const formData = new FormData();
    formData.append("image_url", imageData || "");
    formData.append("name", nome);
    formData.append("description", descricao);
    formData.append("tags", JSON.stringify(tags));
    formData.append("brand", user.name);
    formData.append("ingredients", ingredientes);
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

    api.put(`/product/update/${params.id}`,
        formData, {
          headers: {
            "Authorization": `Bearer ${token}`,
          }
        })
      .then(res => {
        toast.success('Produto alterado com sucesso')
        setTimeout(() => Redirecionar(res.data._id), 800)
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  useEffect(() => { getProduto() }, [])

  return (
    <>
      <Header />
      <Container>
        {produto ? produto.brand === user.name ?
          <>
            <Breadcrumb>
              <span className='textoCinza' onClick={() => { Redirecionar(produto._id) }}>Produtos</span>
              <img src={Voltar} alt='Voltar' />
              <span>{produto.name}</span>
            </Breadcrumb>
            <ContainerProduto>
              <ContainerNome>
                <span />
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <img src={trash} alt='Deletar' onClick={() => { setPopUp(true) }} />
              </ContainerNome>
              <DadosProduto>
                <DadosProdutoInfo>
                  <PrimeiraParte>
                    <div className='containerImagem'>
                      <img src={getImageSource({ ...produto, image_url: image instanceof File ? URL.createObjectURL(image) : image || produto.image_url })} alt={produto.name || 'Produto'} className='foto' />
                    </div>
                    <div className="info">
                      <input type="file" id="image"
                        onChange={(event) => {
                          const file = event.target.files[0];
                          if (file) setImage(file);
                        }}
                      />
                    </div>
                    <p>Não contém:</p>
                    <div className='containerTags'>
                      {produto.tags ? produto.tags.map(tag => {
                        return (
                          <Tag dados={tag.free_of} status='false' />
                        )
                      }) : null}
                    </div>
                  </PrimeiraParte>
                  <SegundaParte>
                    <p className='bold'>Marca</p>
                    <p>{produto.brand}</p>
                    <p className='bold'>Ingredientes</p>
                    <textarea type="text" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} />
                    <p className='bold'>Descrição</p>
                    <textarea type="areatext" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                  </SegundaParte>
                </DadosProdutoInfo>
                <TerceiraParte>
                  <p>Tabela Nutricional</p>
                  <table>
                    <tbody>
                      <tr>
                        <td>Quantidade da porção</td>
                        <td><input type="text" value={qtd} onChange={(e) => setQtd(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td>Valor Energético</td>
                        <td><input type="text" value={energetico} onChange={(e) => setEnergetico(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td>Proteína</td>
                        <td><input type="text" value={proteina} onChange={(e) => setProteina(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td>Gorduras Totais</td>
                        <td><input type="text" value={gorduraTotal} onChange={(e) => setGorduraTotal(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td>Gorduras Saturadas</td>
                        <td><input type="text" value={gorduraSaturada} onChange={(e) => setGorduraSaturada(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td>Gorduras Trans</td>
                        <td><input type="text" value={gorduraTrans} onChange={(e) => setGorduraTrans(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td>Fibra Alimentar</td>
                        <td><input type="text" value={fibra} onChange={(e) => setFibra(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td>Sódio</td>
                        <td><input type="text" value={sodio} onChange={(e) => setSodio(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td>Outros minerais</td>
                        <td><input type="text" value={minerais} onChange={(e) => setMinerais(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td>Vitaminas</td>
                        <td><input type="text" value={vitamina} onChange={(e) => setVitamina(e.target.value)} /></td>
                      </tr>
                    </tbody>
                  </table>
                </TerceiraParte>
              </DadosProduto>
            </ContainerProduto>
            <Botoes>
              <p className='btnCancelar' onClick={() => { Redirecionar(produto._id) }}>Cancelar</p>
              <p className='btnSalvar' onClick={() => { atualizar() }}>Salvar</p>
            </Botoes>
            {popUp ?
              <PopUpDeletarProduto status={popUp} setStatus={setPopUp} id={produto._id} nome={produto.name} />
              : null}
          </>
          : <h2>Tente novamente</h2>
          : null
        }
      </Container>
      <Footer />
    </>
  )
}

export default ProductEdit;