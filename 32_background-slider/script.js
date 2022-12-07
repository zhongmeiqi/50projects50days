const body = document.body
const left = document.querySelector('#left')
const right=document.querySelector('#right')
const slide = document.querySelectorAll('.slide')

let idx = 0
setBgToBody()
left.addEventListener('click',()=>{
    idx--
    if(idx<0){
        idx=slide.length-1
    }
    setBgToBody()

    activeClassChange()
})
right.addEventListener('click',()=>{
    idx++
    if(idx>slide.length-1){
        idx=0
    }
    activeClassChange()
    setBgToBody()

})

function activeClassChange(){
    slide.forEach((item,index)=>{
        if(idx===index){
            item.classList.add('active')
        }else{
            item.classList.remove('active')
        }
    })
}
function setBgToBody(){
    body.style.backgroundImage=slide[idx].style.backgroundImage
}