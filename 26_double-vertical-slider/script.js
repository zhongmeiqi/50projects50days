const down = document.querySelector('.down-button')
const up = document.querySelector('.up-button')
const left = document.querySelector('.left-slide')
const right = document.querySelector('.right-slide')

let upY = 3
let downY = 1
function btnDisabled(){
    if(downY===4){
        down.disabled = true
    }else if(upY===1){
        up.disabled = true
    }else{
        down.disabled=false
        up.disabled=false
    }
}

down.addEventListener('click',()=>{
    downY++
    btnDisabled()
    left.style.transform = `translateY(${downY*100}%)`;
})
up.addEventListener('click',()=>{
    upY--
    btnDisabled()
    right.style.transform = `translateY(${upY*100}%)`;
})
