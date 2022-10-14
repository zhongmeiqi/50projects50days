const btn =document.querySelector('.btn')
const boxContainer = document.querySelector('.box-container')

btn.addEventListener('click',()=>boxContainer.classList.toggle('big'))
function createBox(){
    for(let i=0;i<4;i++){
        for(let j = 0;j<4;j++){
            let box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition= `${-j * 125}px ${-i * 125}px`
            boxContainer.appendChild(box);
        }
    }
}
createBox()