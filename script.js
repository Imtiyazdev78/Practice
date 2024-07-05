

// First Method:
const card = document.querySelector('.card');
const front = document.querySelector('.front')

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    // front.style.backgroundColor = 'red';
});



// Second Method:
const card1 = document.querySelector('.card');
const front1 = document.querySelector('.front');

const cardHandlers = () => {
    card1.classList.toggle('flipped');
    front.style.backgroundColor = 'red';
};

// card.addEventListener('click', cardHandlers);
