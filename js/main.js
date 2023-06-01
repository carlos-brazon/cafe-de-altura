const chevron= document.querySelectorAll('.chevron')
const paragraph_chevron= document.querySelectorAll('.question p')
const linea= document.querySelectorAll('.titleicon')
console.log(chevron, paragraph_chevron);
chevron.forEach((e, i) =>{
    e.addEventListener('click', event =>{  
        paragraph_chevron[i].classList.toggle('hidden')
         linea[i].classList.toggle('lol')
         chevron[i].classList.toggle('chevronDown')
    })

})