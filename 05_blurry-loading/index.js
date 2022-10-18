const bg = document.querySelector('.bg');
const percent = document.querySelector('.percent')

let progress = 0;
let timer = setInterval(load,50)

function load(){
    progress++;
    if(progress>99){
        clearInterval(timer)
    }
    percent.innerText=`${progress}%`
    percent.style.opacity = scale(progress, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(progress, 0, 100, 30, 0)}px)`
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
