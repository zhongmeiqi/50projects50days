const img = document.querySelector('.loveMe')
const timesEl = document.querySelector('#times')
let times = 0
let clickTime = 0

img.addEventListener('click',(e)=>{
    if(clickTime===0){
        clickTime=new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime)<800){
            times++
            timesEl.innerText=times
            const like = document.createElement('div')
            img.appendChild(like)
            like.innerHTML='❤'
            like.style.top=`${e.offsetY}px`
            like.style.left=`${e.offsetX}px`
            like.classList.add('like')
            like.classList.add('like-visible')
            setTimeout(()=>like.remove(),1000)
        }else{
            clickTime=new Date().getTime()
        }
    }
  
})