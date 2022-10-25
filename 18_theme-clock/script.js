const btn = document.querySelector('button')
const container = document.querySelector('.container')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
btn.addEventListener('click',()=>{
    container.classList.toggle('dark')
})
setInterval(()=>{
    calcu()
},1000)
function calcu(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    hour.style.transform = `rotate(${h/24*360}deg)`
    minute.style.transform = `rotate(${m/60*360}deg)`
    second.style.transform = `rotate(${s/60*360}deg)`
    
}