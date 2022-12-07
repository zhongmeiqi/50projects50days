const range = document.querySelector('#range')
const label = document.querySelector('label')
const rangeWidth = range.clientWidth
const labelWidth = label.clientWidth

range.addEventListener('input',(e)=>{
    const {value,max,min} = e.target

    console.log(value,max,min,rangeWidth,label.style.left)
    label.innerText=value

    label.style.left=(rangeWidth*value*0.01)-(labelWidth/2)+'px'
    console.log(label.style.left)
})

/* 
该函数在 stack overflow网站中
    传入一个值num 
    返回该值num 在一段小范围中的位置 相对于一段大范围中对应的位置
*/
function scale(num,inMin,inMax,outMin,outMax){
    return (num-inMin)*(outMax-outMin)/(inMax-inMin) - outMin
}