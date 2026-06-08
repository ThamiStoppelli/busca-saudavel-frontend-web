import { Container } from './styles';

function Tag({ dados, status, setStatus }) {
  const isActive = status === true || status === 'true';

  function handleClick() {
    if (typeof setStatus === 'function') {
      setStatus(!isActive);
    }
  }

  return (
    <Container
      type="button"
      onClick={handleClick}
      $active={isActive}
      aria-pressed={isActive}
      disabled={typeof setStatus !== 'function'}
    >
      {dados}
    </Container>
  );
}
  
export default Tag;
