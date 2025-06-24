const form = document.querySelector('form');
const btn = document.querySelector('.buttonSubmit');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.querySelector('.name');
    let nameValue = name.value;
    console.log(nameValue);
})