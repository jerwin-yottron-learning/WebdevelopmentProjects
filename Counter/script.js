const counters = document.querySelectorAll('.counter');
counters.forEach(counter=>{
    counter.innerText = '0'

    const updateCounter =()=>{
        //changing data type into number using +
        const target =  +counter.getAttribute('data-target'); 
        const c = +counter.innerText; //to get the div value
        const increment = target/200;
        if(c<target){
            counter.innerText=(`${Math.ceil(increment + c)}`)
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = target;
        }
    }
    updateCounter();
})