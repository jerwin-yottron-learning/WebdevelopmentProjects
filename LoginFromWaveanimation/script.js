const labels = document.querySelectorAll('.form label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idex)=>`<span>${letter}</span>`)
    .join('')
});