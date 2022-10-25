const canvas = document.getElementById('canvas');
const decrease = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const increase = document.getElementById('increase');
const colorEl = document.getElementById('color');
const clear = document.getElementById('clear');

const ctx = canvas.getContext('2d')

let size = 10,
isPress=false,
color=colorEl.value
let x
let y

canvas.addEventListener('mousedown',(e)=>{

    x=e.offsetX
    y=e.offsetY
    isPress=true
})
canvas.addEventListener('mouseup',(e)=>{

    x=undefined
    y=undefined
    isPress=false
})
canvas.addEventListener('mousemove',(e)=>{
    if(isPress){
        let x2=e.offsetX
        let y2=e.offsetY
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)
        x=x2
        y=y2
    }
    

})
function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI*2)
    ctx.fillStyle=color
    ctx.fill()
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle=color
    ctx.lineWidth=size*2
    ctx.stroke()
}
function updateSize(){
    sizeEl.innerText=size
    if(size===50){
        increase.disabled = true
    }else if(size===5){
        decrease.disabled = true
    }else{
        increase.disabled=false
        decrease.disabled=false
    }
}
increase.addEventListener('click',()=>{
    size+=5
    if(size>50){
        size=50
    }
    updateSize()
})
decrease.addEventListener('click',()=>{
    size-=5
    if(size<5){
        size=5
    }
    sizeEl.innerText=size
    updateSize()
})
colorEl.addEventListener('change',(e)=>{
    color=e.target.value
})
clear.addEventListener('click',()=>ctx.clearRect(0,0,canvas.width,canvas.height))