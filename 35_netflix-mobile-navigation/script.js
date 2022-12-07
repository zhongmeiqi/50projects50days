const btn = document.querySelector('button')
const navBlack = document.querySelector('.nav-black')
const navRed = document.querySelector('.nav-red')
const nav = document.querySelector('nav')

btn.addEventListener('click',()=>{
    if(btn.innerText==='open nav'){
        navBlack.classList.add('visible')
        navRed.classList.add('visible')
        nav.classList.add('visible')
        btn.innerText='close nav'
    }else{
        navBlack.classList.remove('visible')
        navRed.classList.remove('visible')
        nav.classList.add('visible')
        btn.innerText='open nav'
    }
})
