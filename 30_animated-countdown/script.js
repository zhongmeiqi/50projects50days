const container = document.querySelector('.container')
const nums = document.querySelectorAll('.counter .count')
const replay = document.querySelector('button')
const final = document.querySelector('.final')
const numLen = nums.length
readyFun()

function readyFun(){
    nums.forEach((num)=>{
        num.addEventListener('animationend',(e)=>{
            if(num.classList.contains('in')){
                num.classList.remove('in')
                num.classList.add('out')
            }else if(num.classList.contains('out')&&num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            }else{
                container.classList.add('hide')
                final.classList.add('show')
            }
        })

    })
}