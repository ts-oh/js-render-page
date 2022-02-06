function drawContact() {
  const contactBox = document.createElement('contact-container');
  contactBox.setAttribute('class', 'contact-box');
  const contactHeading = document.createElement('h2');
  contactHeading.setAttribute('class', 'contact-heading');
  contactHeading.textContent = 'Contact Info 🎤';

  contactBox.appendChild(contactHeading);
  contactBox.appendChild(createText('Email 📮: feelfreeto@shitonme.com'));
  contactBox.appendChild(createText('Phone Number 📞: +01-123-2021-2022'));
  contactBox.appendChild(
    createText('Address 🧭: Virunga National Park, Bulambo, Congo-Kinshasa')
  );

  const mapDiv = document.createElement('iframe');
  mapDiv.setAttribute('id', 'map');
  mapDiv.setAttribute(
    'src',
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.267150694186!2d29.5142852!3d-0.050221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8582444c8bdb383f!2sVirunga%20National%20Park!5e0!3m2!1sen!2ssg!4v1644033501202!5m2!1sen!2ssg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"'
  );

  contactBox.appendChild(mapDiv);

  return contactBox;
}

function createText(text) {
  const content = document.createElement('p');
  content.setAttribute('class', 'content-p');
  content.textContent = text;

  return content;
}

function appendContact() {
  const section = document.querySelector('.main-content');
  section.textContent = '';
  section.appendChild(drawContact());
}

export default appendContact;
