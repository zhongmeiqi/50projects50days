const textarea = document.querySelector('#textarea')
const tags = document.querySelector('#tags')


textarea.addEventListener('keyup',(e)=>{
    console.log(e)
    createTag(e.target.value)
    if(e.key==='Enter'){
    setTimeout(()=>e.target.value='',200)
     swag()
    }
})
function createTag(text){
   const tagList = text.split('，').filter(it=>it).map(it=>it.trim())
   tags.innerHTML=''
   tagList.forEach((val)=>{
    const tag =document.createElement('span')
    tag.innerText=val;
    tag.classList.add('tag')
    tags.appendChild(tag)
   })
}
function swag(){
    const timer = setInterval(()=>{
      const randomTag= getRandomTag()
       if(randomTag!==undefined){
        select(randomTag)
        setTimeout(()=>unSelect(randomTag),200)
       }
    },200)
    setTimeout(()=>{
        clearInterval(timer);
        select(getRandomTag())
    },5000)
}
function getRandomTag(){
    const tagList = document.querySelectorAll('.tag')
    return tagList[Math.floor(Math.random()*tagList.length)]
}

function select(tag){
    tag.classList.add('choose')
}
function unSelect(tag){
    tag.classList.remove('choose')
}
