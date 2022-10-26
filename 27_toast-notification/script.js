const toasts = document.querySelector('#toasts')
const btn = document.querySelector('.btn')

const option=[{value:1,label:'one'},{value:2,label:'two'},{value:3,label:'three'},{value:4,label:'four'}]

btn.addEventListener(('click'),()=>{
    const msg = document.createElement('div')
    let random = Math.floor(Math.random()*option.length)
    msg.id = option[random].label
    msg.innerText = option[random].label
    toasts.appendChild(msg)
    setTimeout(()=>{
        toasts.removeChild(msg)
    },3000)
})