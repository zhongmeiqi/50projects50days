const big = document.querySelector('.big');
const fill = document.querySelector('.fill');
const quantity = document.querySelector('#quantity');
const smallList= document.querySelectorAll('.small');
const remained = document.querySelector('.remained');

smallList.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('drink')
        calcu()
    })
})


function calcu(){
    let cup = Array.from(smallList).filter((item)=>Array.from(item.classList).includes('drink'))
    quantity.innerText =2 - cup.length*0.25+'L';
    remained.style.height = (2 - cup.length*25) / 2 +'%'
    if(cup.length===8){
        fill.style.height='300px'
        remained.style.height='0px'
    }else{
        fill.style.height = cup.length*25 / 2 +'%'

    }
    fill.innerText =cup.length*25 / 2 +'%';

   
}