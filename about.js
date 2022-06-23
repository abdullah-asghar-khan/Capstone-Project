const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

function createPastEventImage({ year, location, image }) {
  const courosalImageCard = createElement('div', 'courosal-image-card');

  const overlaySlide = createElement('div', 'courosal-image-fade');
  const label1 = createElement('h3');
  label1.innerText = year;
  const label2 = createElement('p');
  label2.innerText = location;
  overlaySlide.append(label1, label2);

  const imageEL = createElement('img');
  imageEL.src = image;
  imageEL.alt = location;

  courosalImageCard.append(overlaySlide, imageEL);
  const container = document.querySelector('.past-image-courosal');
  if (container) {
    container.appendChild(courosalImageCard);
  }
}

function showImages() {
  pastEventImages.map((album) => createPastEventImage(album));
}
showImages();


