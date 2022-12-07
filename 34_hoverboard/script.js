const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const quantity = 500

for(let i=0;i<quantity;i++){
    let square=document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>{
        let color = randomColor()
        square.style.background=color
        square.style.boxShadow=`${color} 0px 0px 2px`
    })
    square.addEventListener('mouseout',()=>{
        square.style.background='rgb(29, 29, 29)'
        square.style.boxShadow=`#000 0px 0px 2px`
    })
    container.appendChild(square)
}

function randomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}