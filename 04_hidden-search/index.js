const container = document.querySelector('.input-container')
const input = document.getElementsByTagName('input');
const search = document.querySelector('.fa-search');

search.addEventListener('click',()=>{
    container.classList.toggle('show-input')
    input[0].focus()
})