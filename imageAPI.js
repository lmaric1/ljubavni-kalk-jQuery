document.addEventListener('DOMContentLoaded', function () {
  const imagesContainer = document.getElementById('images');

  const fetchImages = async () => {
    try {
      const ona = document.getElementById('ona').value.trim();
      const on = document.getElementById('on').value.trim();

      if (ona.length === 0 || on.length === 0) {
        console.error('Molimo unesite ime cure i dečka.');
        return;
      }

      const zensko = [
        'https://source.unsplash.com/random/1',
      ];
      const musko = [
        'https://source.unsplash.com/random/2',
      ];
      const zenskoMusko = [zensko, musko];

      renderImages(zenskoMusko);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const renderImages = (images) => {
    const imagesHTML = images.flatMap((imageSet, setIndex) => {
      return imageSet.map((imageUrl, index) => {
        return `<img key=${setIndex * images[0].length + index} class='thumbnail' src=${imageUrl} alt='Random slika ${setIndex * images[0].length + index + 1}' />`;
      });
    });

    imagesContainer.innerHTML = imagesHTML.join('');
  };

  document.getElementById('izracunaj').addEventListener('click', function (event) {
    fetchImages();
  });
});
