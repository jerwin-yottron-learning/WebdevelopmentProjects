console.log('hi');

const loadText =document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let load =0;

let int =setInterval(blur,30);

function blur(){
    load++
    if(load>99){
        clearInterval(int)
    }
    console.log(load);
    loadText.innerText =`${load}%`;
    loadText.style.opacity = (100 - load) / 100;
    const blurAmount = 10 * ((100 - load) / 100); 
    bg.style.filter = `blur(${blurAmount}px)`;
}
