import { Container, Content } from './styles';

function Paginacao({ nPages, paginaAtual, setPaginaAtual }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (paginaAtual !== nPages) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const prevPage = () => {
    if (paginaAtual !== 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  return (
    <nav aria-label="Paginação de produtos">
      <Container>
        <Content>
          <a
            className={paginaAtual === 1 ? 'disabled' : ''}
            onClick={prevPage}
            href="#pontoChave"
            aria-label="Página anterior"
          >
            Anterior
          </a>
        </Content>

        {pageNumbers.map((pgNumber) => (
          <Content key={pgNumber} className={paginaAtual === pgNumber ? 'active' : ''}>
            <a onClick={() => setPaginaAtual(pgNumber)} href="#pontoChave">
              {pgNumber}
            </a>
          </Content>
        ))}

        <Content>
          <a
            className={paginaAtual === nPages ? 'disabled' : ''}
            onClick={nextPage}
            href="#pontoChave"
            aria-label="Próxima página"
          >
            Próxima
          </a>
        </Content>
      </Container>
    </nav>
  );
}
  
export default Paginacao;
