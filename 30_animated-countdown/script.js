const counter = document.querySelector('.counter')
const nums = document.querySelectorAll('.nums span')
const final = document.querySelector('.final')
const replay = document.querySelector('#replay')
const nextToLast = nums.length -1

runAnimation()

function runAnimation(){
    nums.forEach((num,idx) => {
        num.addEventListener('animationend',(e)=>{
            if(e.animationName==='goIn' && idx!==nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
            }else if(e.animationName==='goOut'&&num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            }else{
                counter.classList.add('hide')
                final.classList.add('show')
            }
        })
    });
}

replay.addEventListener('click',()=>{
    counter.classList.remove('hide')
    final.classList.remove('show')
    nums.forEach((num)=>num.classList.value='')
    nums[0].classList.add('in')
})