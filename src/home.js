import Harambe from './img/harambe.gif';

function homeContent() {
  const contentContainer = document.createElement('div');
  contentContainer.setAttribute('class', 'content-box');

  const mainHeading = document.createElement('h2');
  mainHeading.textContent = 'Welcome 🙇🏻‍♂️';

  const mainParagraph = document.createElement('p');
  mainParagraph.textContent =
    "This is a 'Project: Restaurant Page' from The Odin Project. The objective was to create a fake restaurant page. But that sounded a bit boring, so I decided to have some fun and mess around while incorporating all the lesson objectives. Thank you for visiting 🧃.";

  const externalLink = document.createElement('a');
  externalLink.textContent = 'Click here for 🍞 !!!';
  externalLink.setAttribute('href', 'http://motherfuckingwebsite.com/');

  const harambeImage = document.createElement('img');
  harambeImage.setAttribute('src', Harambe);
  harambeImage.setAttribute('alt', 'Harambe the Gorilla');

  const harambeCaption = document.createElement('figcaption');
  harambeCaption.textContent = 'Fig.1 - Harambe shakes shake weight 🏋🏻';

  contentContainer.appendChild(mainHeading);
  contentContainer.appendChild(mainParagraph);
  contentContainer.appendChild(harambeImage);
  contentContainer.appendChild(harambeCaption);
  contentContainer.appendChild(externalLink);

  return contentContainer;
}

function appendHome() {
  const section = document.querySelector('.main-content');
  section.textContent = '';
  section.appendChild(homeContent());
}

export default appendHome;
