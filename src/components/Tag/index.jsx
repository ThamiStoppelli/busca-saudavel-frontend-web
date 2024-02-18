import { Container, ContainerAtivo } from './styles'

function Tag({ dados, status, setStatus }){

  function tornarDesativo(){
    setStatus(false);
  }

  function tornarAtivo(){
    setStatus(true);
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
  
export default Tag;