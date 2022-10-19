
const btn = document.getElementById('jokeBtn');
const joke = document.getElementById('joke');
const config = {headers:{Accept:'application/json'}};

btn.addEventListener('click',()=>getJoke())
async function getJoke(){
   const res = await fetch('https://icanhazdadjoke.com',config)
   const data = await res.json()

   joke.innerHTML = data.joke
}