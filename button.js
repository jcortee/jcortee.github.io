const yesButton = document.getElementById('yesButton');
const responseSection = document.getElementById('responseSection');
const initialContent = document.querySelector('h1'); // Select the initial question
const firstGif = document.querySelector('.gif'); // Select the first GIF

yesButton.addEventListener('click', () => {
    responseSection.classList.remove('hidden'); // Show the response section
    yesButton.style.display = 'none'; // Hide the button
    initialContent.style.display = 'none'; // Hide the question text
    firstGif.style.display = 'none'; // Hide the first GIF
});
