const img = document.querySelector('.loveMe')
const timesEl = document.querySelector('#times')
const like=document.querySelector('.like')
let times = 0

img.addEventListener('click',(e)=>{
    times++
    timesEl.innerText=times
    const like = document.createElement('div')
    img.appendChild(like)
    like.innerHTML='❤'
    like.style.top=`${e.offsetY}px`
    like.style.left=`${e.offsetX}px`
    like.classList.add('like')
    like.classList.add('like-visible')
    setTimeout(()=>img.removeChild('like'),1000)
})