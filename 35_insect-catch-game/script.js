const container = document.querySelector('#container')
const playBtn = document.querySelector('button')
const time = document.querySelector('.time')
const score = document.querySelector('.score')
const colorList = document.querySelector('.color-list')
const game=document.querySelector('.game')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
let choice = ''
let scoreNum = 0

playBtn.addEventListener('click',()=>container.style.transform=`translateY(-100%)`)


for(let i=0;i<colors.length;i++) {
    const color = document.createElement('div')
    color.classList.add('color')
    color.style.background=colors[i]
    colorList.appendChild(color)

    color.addEventListener('click',()=>{
        choice=colors[i]
        container.style.transform=`translateY(-200%)`;
        let num =0
        setInterval(()=>{
            num++
            time.innerText=`${Math.floor(num/60)>9?Math.floor(num/60):`0`+Math.floor(num/60)}:${num%60>9?num%60:`0`+num%60}`
        },1000)
        createColor()
    })
}
function createColor(){
        const color = document.createElement('div')
        color.classList.add('color')
        color.style.background=choice
        color.style.position = 'absolute'
        color.style.top= Math.random()*(window.innerHeight-200)+100+'px'
        color.style.left = Math.random()*(window.innerWidth-200)+100+'px'

        game.appendChild(color)
        color.addEventListener('click',()=>{
            setTimeout(()=>game.removeChild(color),1000)
            scoreNum++
            score.innerText=scoreNum
            addInsects()
            if(scoreNum>5){
                window.alert('恭喜通关')
                container.style.transform=`translateY(-300%)`;
            }
        })
    }    
function addInsects(){
    setTimeout(createColor(),1000)
    setTimeout(createColor(),1500)

}
