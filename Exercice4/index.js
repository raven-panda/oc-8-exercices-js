const button = document.querySelector('#myButton');
const paragraph = document.createElement('p');
paragraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';

button.addEventListener('click', (e) => {
    document.body.appendChild(paragraph);
});
