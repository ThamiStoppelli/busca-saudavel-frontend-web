import { Container, ContainerAtivo } from './styles';

function SmallTag({ id, dados, status, setStatus, selectedTags, setSelectedTags }) {
  function tornarDesativo() {
    setStatus(false);
    setSelectedTags(selectedTags.filter((tag) => (tag._id || tag) !== id));
  }

  function tornarAtivo() {
    setStatus(true);
    setSelectedTags([...selectedTags, { _id: id, free_of: dados }]);
  }

  const TagContainer = status === true ? ContainerAtivo : Container;

  return (
    <TagContainer type="button" onClick={() => (status === true ? tornarDesativo() : tornarAtivo())}>
      <span>{dados}</span>
    </TagContainer>
  );
}

export default SmallTag;
