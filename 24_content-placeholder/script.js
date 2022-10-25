const image =document.querySelector('.image')
const title =document.querySelector('.title')
const describe =document.querySelector('.describe')
const avatar =document.querySelector('.avatar')
const authorName =document.querySelector('.name')
const time =document.querySelector('.time')

setTimeout(()=>{
    image.classList.remove('animated-bg')
    title.classList.remove('animated-bg')
    describe.classList.remove('animated-bg')
    avatar.classList.remove('animated-bg')
    time.classList.remove('animated-bg')
    authorName.classList.remove('animated-bg')

    image.style.backgroundImage='url(./img.avif)'
    title.innerText = 'Lorem ipsum dolor sit amet'
    describe.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    avatar.style.backgroundImage='url(./author.jpg)'
    authorName.innerText = 'John Doe'
    time.innerText = 'Oct 08, 2020'
},5000)
