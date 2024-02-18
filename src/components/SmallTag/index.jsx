import { Container, ContainerAtivo } from './styles'

function SmallTag({ id, dados, status, setStatus, selectedTags, setSelectedTags }){

  function tornarDesativo(){
    setStatus(false);
    setSelectedTags(selectedTags.filter(tag => tag !== id));
  }

  function tornarAtivo(){
    setStatus(true);
    setSelectedTags([...selectedTags, id]);
  }

  return(
    <>
      {status === true? 
        <ContainerAtivo onClick={() => tornarDesativo()}>
          <span>{dados}</span>
        </ContainerAtivo>
      :
        <Container onClick={() => tornarAtivo()}>
          <span>{dados}</span>
        </Container>
      }
    </>
  )
}
  
export default SmallTag;