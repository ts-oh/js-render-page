import './style.css';
import appendHome from './home.js';
import appendContact from './contact.js';
import appendMenu from './menu.js';

function drawHeader() {
  const header = document.createElement('header');
  header.setAttribute('class', 'header-section');
  header.appendChild(drawHeading());
  header.appendChild(drawNav());
  return header;
}

function drawHeading() {
  const heading = document.createElement('h1');
  heading.setAttribute('id', 'heading-title');
  heading.textContent = 'My Restaurant';
  return heading;
}

function drawNav() {
  const nav = document.createElement('nav');
  nav.appendChild(drawList());

  return nav;
}

function drawList() {
  const ul = document.createElement('ul');

  ul.setAttribute('class', 'nav-list');

  for (let i = 0; i < 3; i++) {
    const anchorLink = document.createElement('a');
    const li = document.createElement('li');

    li.setAttribute('data-id', i + 1);
    anchorLink.setAttribute('class', 'nav-item');
    ul.appendChild(li);

    if (li.dataset.id === '1') {
      anchorLink.textContent = 'Home';
      li.appendChild(anchorLink);
    } else if (li.dataset.id === '2') {
      anchorLink.textContent = 'Menu';
      li.appendChild(anchorLink);
    } else {
      anchorLink.textContent = 'Contact Us';
      li.appendChild(anchorLink);
    }
  }

  return ul;
}

function drawMainSection() {
  const mainSection = document.createElement('section');
  mainSection.setAttribute('class', 'main-content');

  return mainSection;
}

function drawFooter() {
  const footer = document.createElement('footer');
  footer.setAttribute('class', 'header-section');

  const copyRight = document.createElement('span');
  copyRight.setAttribute('class', 'copyright-info');
  footer.appendChild(copyRight);

  function realTime() {
    let currentTime = new Date().toLocaleString();
    copyRight.textContent = `Copyright by Tim Oh - ${currentTime}`;
  }

  const githubLink = document.createElement('a');
  githubLink.setAttribute('href', 'https://github.com/ts-oh/restaurant_page');
  githubLink.setAttribute('class', 'github-link');
  githubLink.textContent = 'Back to my Github💦';
  footer.appendChild(githubLink);

  setInterval(realTime, 1000);

  return footer;
}

function eventDelegation() {
  const liBtns = document.querySelectorAll('.nav-item');
  const classActive = 'active';

  liBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.target.textContent;
      const item = e.target;
      if (target === 'Home') {
        appendHome();
        activeTab(item);
      } else if (target === 'Menu') {
        appendMenu();
        activeTab(item);
      } else {
        appendContact();
        activeTab(item);
      }
    });
  });

  function activeTab(item) {
    unselectItems();
    item.classList.add(classActive);
  }

  function unselectItems() {
    liBtns.forEach((btn) => {
      console.log(btn);
      btn.classList.remove('active');
    });
  }
}

function drawDivContent() {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('id', 'content');
  document.body.append(contentDiv);
  return contentDiv;
}

function drawMain() {
  drawDivContent();
  const content = document.querySelector('#content');

  content.appendChild(drawHeader());
  content.appendChild(drawMainSection());
  content.appendChild(drawFooter());

  eventDelegation();
  appendHome();
}

drawMain();
