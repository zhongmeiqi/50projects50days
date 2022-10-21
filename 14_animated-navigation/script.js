const icon = document.querySelector('.icon');
const container = document.querySelector('.container')

icon.addEventListener('click',()=>{
    container.classList.toggle('active')
})