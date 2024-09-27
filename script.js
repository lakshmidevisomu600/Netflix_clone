const button = document.querySelector('.button');

button.addEventListener('click', () => {
    alert('Thanks for joining!');
});

document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.toggle('active');
        if (isActive) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});

document.querySelectorAll('.plus-icon').forEach(icon => {
    icon.addEventListener('click', event => {
        event.stopPropagation();
        const question = icon.parentElement.querySelector('.question');
        const answer = icon.parentElement.nextElementSibling;
        const isActive = question.classList.toggle('active');
        if (isActive) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});


const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks for signing up!');
});