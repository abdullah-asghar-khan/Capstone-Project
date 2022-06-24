const drummers = [
  {
    id: 1,
    name: 'Aric Improta',
    topic: ' Aric Improta is an important figure in the development of the modern drum set.',
    bio: 'He is an explosive live performer, and one of drumming`s true showmen.',
    urlImage: 'images/aric-impronta.jpg',
  },
  {
    id: 2,
    name: 'Tony Royster Jnr',
    topic: ' Tony Royster Jr. won the 1995 Guitar Center Drum-Off Competition',
    bio: ' His drumming heroes were two of the greatest fusion drummers in history.',
    urlImage: 'images/Tony-Royster.jpg',
  },
  {
    id: 3,
    name: 'John Blackwell Jr.',
    topic: 'He began learning the drums when he was three years old from his father',
    bio: ' By the time he was 17, he was performing professionally.',
    urlImage: 'images/Tony-Royster.jpg',
  },
  {
    id: 4,
    name: 'Will Calhoun',
    topic: 'Will Calhoun is a drummer from New York known for being a member of the band Living Colour.',
    bio: 'He has performed with Wayne Shorter, Jaco Pastorius.',
    urlImage: 'images/Tony-Royster.jpg',
  },
  {
    id: 5,
    name: 'Anika Niles',
    topic: 'Anika Nilles became a YouTube sensation when she released her first video',
    bio: 'She has since studied with master educators like Claus Hessler',
    urlImage: 'images/Tony-Royster.jpg',
  },
  {
    id: 6,
    name: 'Matt Cameron',
    topic: 'Cameron began performing professionally in San Diego when he was 14 years old',
    bio: 'Matt Cameron is best known for his work with Soundgarden.',
    urlImage: 'images/Tony-Royster.jpg',
  },

];

const speakersContainer = document.querySelector('.speakers-container');
drummers.forEach((speaker) => {
  const speakerProject = document.createElement('div');
  speakerProject.innerHTML = (`  
  <div class="speakers_list_item">
  <div class="speaker_list_item_img">
      <img src=${speaker.urlImage} alt="${speaker.name}" />
  </div>
  <div class="speaker_list_item_content">
      <h3>${speaker.name}</h3>
      <p class="speaker_list_item_content_bio">
         ${speaker.topic}
      </p>
      <div class="speakers_bio_line">

      </div>
      <p>
      ${speaker.bio}
      </p>
  </div>
</div>
`);
  speakersContainer.appendChild(speakerProject);
});

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
