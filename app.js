const dropDown = document.querySelector('.options');
const icon = document.querySelector('.nav-bar .humberger-btn .fa-bars');
const body = document.getElementById('body');

const menuLinks = document.querySelector('.hh');
menuLinks.addEventListener('click', hideMenu());
icon.addEventListener('click', changeIcon());

dropDown.style.display = 'none';

function changeIcon() {
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');

  if (dropDown.style.display === 'none') {
    dropDown.style.display = 'block';
    body.style.overflow = 'hidden';
  } else {
    dropDown.style.display = 'none';
    body.style.overflow = 'visible';
  }
}

function hideMenu() {
  dropDown.style.display = 'none';
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
  body.style.overflow = 'visible';
}

const speakersLeft = [{
  class: 'speaker_1',
  picture: 'IMAGES/speaker1-dj-khaled.jpeg',
  name: 'DJ Khaled',
  occupation: 'An American DJ, record executive, and record producer.',
  description: 'He started and is currently the CEO of WE THE BEST Music.',
},
{
  class: 'speaker_2',
  picture: 'IMAGES/speaker2-marshmello.jpg',
  name: 'Marshmello',
  occupation: 'American electronic music producer and DJ.',
  description: ' He is the founder and CEO of Dotcom entertainment.',
},
{
  class: 'speaker_3',
  picture: 'IMAGES/speaker3-50-cent.jpg',
  name: '50 Cent',
  occupation: 'American rapper, actor, and entrepreneur.',
  description: 'He has been described as a "master of the nuanced art of lyrical brevity',
},
];

const speakersRight = [
  {
    class: 'speaker_4',
    picture: 'IMAGES/speaker4_LAUREN_DAIGLE.jpg',
    name: 'Lauren Daigle',
    occupation: ' American Christian music singer and songwriter.',
    description: 'she released her debut album, How Can It Be, in 2015.',
  },
  {
    class: 'speaker_5',
    picture: 'IMAGES/speaker5_KARI_JOBE.jpg',
    name: 'Kari Jobe',
    occupation: ' American Christian music singer and songwriter.',
    description: 'She won six Dove awards out of 10 nominations.',
  },
  {
    class: 'speaker_6',
    picture: 'IMAGES/speaker6-young-guru.jpg',
    name: 'Young Guru',
    occupation: 'American audio engineer, record producer, disc jockey, and record executive',
    description: 'Young Guru won a Grammy Award for Best Urban Contemporary Album.',
  },
];
const leftSide = document.querySelector('.left-side');

for (let i = 0; i < speakersLeft.length; i += 1) {
  leftSide.innerHTML += `
    <div class="speaker speaker1">
      <img src=" ${speakersLeft[i].picture}" alt=" ${speakersLeft[i].name}" class="s b s-1">
      <div class="details">
        <h4 class="name"> ${speakersLeft[i].name}</h4>
        <p class="who">
           ${speakersLeft[i].occupation}
        </p>
        <p class="s-more">
           ${speakersLeft[i].description}
        </p>
      </div>
    </div>
  `;
}
const rightSide = document.querySelector('.right-side');
for (let i = 0; i < speakersRight.length; i += 1) {
  rightSide.innerHTML += `
    <div class="speaker speaker4">
      <img src=" ${speakersRight[i].picture}" alt=" ${speakersRight[i].name}" class="s s-4">
      <div class="details">
          <h4 class="name"> ${speakersRight[i].name}</h4>
          <p class="who">
               ${speakersRight[i].occupation}
          </p>
          <p class="s-more">
               ${speakersRight[i].description}
          </p>
      </div>
  </div>
  `;
}
const menuLinks = document.querySelector('.hh');
menuLinks.addEventListener('click', hideMenu());
icon.addEventListener('click', changeIcon());

