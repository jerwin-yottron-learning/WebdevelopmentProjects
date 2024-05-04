const tagsEle = document.getElementById('tags');

const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup',(e)=>{

    createTags(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value =''
        },10)
        randomSelect()
    }
})

function createTags(input){
    const tag = input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim())
    console.log(tag);
    tagsEle.innerHTML='';
    tag.forEach(tag => {
        const tagEle = document.createElement('span');
        tagEle.classList.add('tag');
        tagEle.innerHTML = tag;
        tagsEle.appendChild(tagEle);
    });
}

function randomSelect(){
    const times = 30;
    const interval = setInterval(()=>{
    const randomTag =pickRandomTag();
    highlightTag(randomTag)
    setTimeout(()=>{
        unHighlightTag(randomTag)
    },100)

    },100)
setTimeout(()=>{
clearInterval(interval)
setTimeout(()=>{
 const randomTag = pickRandomTag()
 highlightTag(randomTag)
},100)
},times*100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.round()*tags.length)]
}


function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}