const jokeEle = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');
jokeBtn.addEventListener('click',generateJoke)
generateJoke();

async function generateJoke(){
    const config={
        headers:{
            'Accept':'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com',config)

    const data = await res.json();
    jokeEle.innerHTML = data.joke;

    // fetch('https://icanhazdadjoke.com',config)
    // .then((res)=>res.json()).then((data)=>{
    //     jokeEle.innerHTML = data.joke
    // })
}