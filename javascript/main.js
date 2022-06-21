const drummers = [
    {
      name: 'Aric Improta',
      bio: 'Aric Improta is an important figure in the development of the modern drum set.',
      contentBio: 'Aric Improta is an explosive live performer, and one of drumming`s true showmen. ',
      image: ['./images/aric-impronta.jpg'],
      id: 1,
    },
    {
    name: 'Tony Royster Jnr',
    bio: 'Tony Royster Jr. won the 1995 Guitar Center Drum-Off Competition'
        + 'when he was just 11 years old.',
    contentBio: 'When he was young, his drumming heroes were two of the greatest fusion drummers in history: Billy Cobham and Dennis Chambers.',
    image: ['./images/Tony-Royster'],
    id: 2,
  },
  {
    name: 'John Blackwell Jr.',
    bio: 'Blackwell began learning the drums when he was three years old from his'
     + ' father.',
    contentBio: 'By the time he was 17, he was performing professionally.',
    image: ['./images/John-blackell.jpg'],
    id: 3,
  },

];

const DOM = (() => {
  function createElement(elem, className = null) {
    const element = document.createElement(elem);
    if (className !== null) {
      element.classList.add(className);
    }
    return element;
  }

