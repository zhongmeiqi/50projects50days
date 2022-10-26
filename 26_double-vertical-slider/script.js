const container = document.querySelector('.slider-container')
const down = document.querySelector('.down-button')
const up = document.querySelector('.up-button')
const left = document.querySelector('.left-slide')
const right = document.querySelector('.right-slide')

const slideHeight = container.clientHeight

const length = right.querySelectorAll('div').length

let activeIndex = 0

/* 如果用 px ,容易出现上边框 */
left.style.top = `-${(length-1)*100}vh`

function changePicture(direaction){
    if(direaction==='up'){
        activeIndex--
    }
    if(direaction==='down'){
        activeIndex++
    }
    if(activeIndex<0){
        activeIndex=length-1
    }
    if(activeIndex>length-1){
        activeIndex = 0
    }
    
    right.style.transform = `translateY(-${activeIndex * slideHeight}px)`;
    left.style.transform = `translateY(${activeIndex * slideHeight}px)`;

}
down.addEventListener('click',()=>{
    changePicture('down')
})
up.addEventListener('click',()=>{
    changePicture('up')
})
