const close = document.querySelector('#close');
const open = document.querySelector('#open');
const container=document.querySelector('.container');

open.addEventListener('click',()=>container.classList.add('show-nav'))

close.addEventListener('click',()=>container.classList.remove('show-nav'))