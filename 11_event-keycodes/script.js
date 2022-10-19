const container = document.querySelector('.container')
window.addEventListener('keydown',(e)=>{

     container.innerHTML=`<div>
     <p>event.key</p>
     <div class="box">
         ${e.key}
     </div>
 </div>
 <div>
     <p>event.keyCode</p>
     <div class="box">
     ${e.keyCode}
     </div>
 </div>
 <div>
     <p>event.code</p>
     <div class="box">
     ${e.code}
     </div>
 </div>`
})