const textEl = document.querySelector('.text')
const speedEl = document.querySelector('#speed')
const text = '能吃能睡，没心没肺'
let speed=1

window.onload() = outPutText()

outPutText(){
    let textArr = text.split('')
    let tempArr = []
    let showText = ''
    setInterval(()=>{
        showText=
    },1000/speed)
}

speed.addEventListener('click',(e)=>{
    speed = e.target.value
  
})