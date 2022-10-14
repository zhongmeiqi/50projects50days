const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
let step = 1;

next.addEventListener('click',function(){
    step++;
    if(step>circles.length){
        step=circles.length
    }
    update()
})
prev.addEventListener('click',function(){
    step--;
    if(step<1){
        step = 1
    }
    update()
})

function update(){
    circles.forEach((circle,idx)=>{
        if(idx<step){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const activeList = document.querySelectorAll('.active')
    progress.style.width=(activeList.length-1)/(circles.length-1) *100+'%';

    if(step==1){
        prev.disabled = true;
    }else if(step ==circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}

