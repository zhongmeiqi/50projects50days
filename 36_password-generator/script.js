const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generator')
const copy = document.getElementById('copy')


let password = ''

generateEl.addEventListener('click',()=>{
  

    password = ''
    let length = lengthEl.value;
    /* checked的值是布尔类型，自动转换为数值1 */
    const typeLen = uppercaseEl.checked+lowercaseEl.checked+numbersEl.checked+symbolsEl.checked;
  
    for(let i=0;i<length;i+=typeLen){
        if(uppercaseEl.checked)password+=getUppercase()
        if(lowercaseEl.checked)password+=getLowercase()
        if(numbersEl.checked)password+=getNumbers()
        if(symbolsEl.checked)password+=getSymbols() 
    }
    resultEl.innerText=password.slice(0,length)
})
copy.addEventListener('click',()=>{
    const textarea = document.createElement('textarea')
    if(!password)return

    textarea.value=password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('password copied to clipboard!')
})




function getUppercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
function getLowercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
function getNumbers(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
function getSymbols(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random()*symbols.length)]
}


