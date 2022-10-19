const sounds = ['applause','boo','gasp','tada','victory','wrong'];
const buttons = document.getElementById('buttons');

sounds.forEach((item)=>{
    const btn = document.createElement('button');
    btn.classList.add('btn')
    btn.innerText = item;
    buttons.appendChild(btn);
    btn.addEventListener('click',()=>playFun(item))
})
function playFun(item){
    sounds.forEach(it=>{
        const audio = document.getElementById(it);
        audio.pause();
        /* 重新播放 */
        audio.currentTime=0
    })
    const isPlayItem = document.getElementById(item);
    isPlayItem.play();

}

