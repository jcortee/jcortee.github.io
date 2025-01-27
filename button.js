const yesButton = document.getElementById('yesButton');
const responseSection = document.getElementById('responseSection');

yesButton.addEventListener('click', () => {
    responseSection.classList.remove('hidden');
    yesButton.style.display = 'none';
});