import Protein from './img/protein.gif';

function drawMenu() {
  const menuBox = document.createElement('div');
  menuBox.setAttribute('class', 'menu-box');

  const menuHeading = document.createElement('h2');
  menuHeading.textContent = 'Menu 🧋';

  const menuOne = document.createElement('p');
  menuOne.textContent =
    'Proteyyn Drink 🥤: Chai flavored protein drink with ice - $7.00';

  const menuTwo = document.createElement('p');
  menuTwo.textContent =
    'Proteyyn Bar 🍫: Chocolate Mint flavored protein bar - $5.00';

  const menuPhoto = document.createElement('img');
  menuPhoto.setAttribute('src', Protein);
  menuPhoto.setAttribute('alt', 'picture of protein kangaroo from agretsuko');

  menuBox.appendChild(menuHeading);
  menuBox.appendChild(menuOne);
  menuBox.appendChild(menuTwo);
  menuBox.appendChild(menuPhoto);

  return menuBox;
}

function appendMenu() {
  const section = document.querySelector('.main-content');
  section.textContent = '';
  section.appendChild(drawMenu());
}

export default appendMenu;
