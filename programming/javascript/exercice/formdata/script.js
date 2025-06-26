const inputPrenom = document.querySelector('.inputPrenom')
const inputNom = document.querySelector('.inputNom')
let form = document.querySelector('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let data = new FormData(form)
});