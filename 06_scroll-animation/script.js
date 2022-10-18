const boxContainer = document.querySelector('.box-container')
const box = document.getElementsByClassName('box')

document.addEventListener('scroll',()=>{
    for(let i = 0;i<box.length;i++){

        console.log(box[i].getBoundingClientRect().y)
        if( box[i].getBoundingClientRect().y<window.innerHeight / 5 * 4 ){
            box[i].classList.add('show')
       }else{
        box[i].classList.remove('show')
       }
    }
})