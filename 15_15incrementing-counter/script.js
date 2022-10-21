const counterList =document.querySelectorAll('.counter')

increase(counterList[0]);
increase(counterList[1]);
increase(counterList[2]);

function increase(ele){
    let initCount = 0
    let target= ele.dataset.target
    let time = 3000 / target
    let timer = setInterval(()=>{
        initCount++;
        ele.innerText = initCount
    }, time)
    setTimeout(()=>{
        clearInterval(timer)
        ele.innerText=target
    },3000)
}