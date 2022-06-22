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
    bio: 'When he was young, his drumming heroes were two of the greatest fusion drummers in history: Billy Cobham and Dennis Chambers.',
    urlImage: 'images/Tony-Royster.jpg',
  },
  {
    id: 3,
    name: 'John Blackwell Jr.',
    topic: 'Blackwell began learning the drums when he was three years old from his father',
    bio: ' By the time he was 17, he was performing professionally.',
    urlImage: 'images/John-Blackwell.jpg',
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
