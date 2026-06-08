import semImagem from '../assets/images/sem-imagem.png';

export function getImageSource(itemOrSource, fallback = semImagem) {
  if (!itemOrSource) return fallback;

  const source =
    typeof itemOrSource === 'string'
      ? itemOrSource
      : itemOrSource.image_url || itemOrSource.image;

  if (!source) return fallback;

  if (
    typeof source === 'string' &&
    (
      source.startsWith('data:') ||
      source.startsWith('http') ||
      source.startsWith('blob:')
    )
  ) {
    return source;
  }

  if (typeof source === 'string') {
    return `data:image/png;base64,${source}`;
  }

  return fallback;
}

export function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve('');

    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}