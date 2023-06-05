const chevron= document.querySelectorAll('.chevron');
const paragraph_chevron= document.querySelectorAll('.question p');
const linea= document.querySelectorAll('.titleicon');
chevron.forEach((e, i) =>{
    e.addEventListener('click', event =>{  
        paragraph_chevron[i].classList.toggle('hidden');
         linea[i].classList.toggle('lol');
         chevron[i].classList.toggle('chevronDown');
    })

})

const data=JSON.parse(localStorage.getItem("data")) || [];
const counterHeader = document.querySelector('.counter-float>a>p');
const buttons = document.querySelectorAll(".imgn button:last-child");
if (data==null || []) {
    counterHeader.innerHTML = data.length;
}

buttons.forEach((e, i) => {
    e.addEventListener('click', event => {
        event.preventDefault();
        const data = JSON.parse(localStorage.getItem("data")) || [];
        let pais = `${document.querySelectorAll(".imgn")[i].children[1].children[0].innerHTML}`;
        let precio = document.querySelectorAll(".imgn")[i].children[1].children[1].innerHTML;
        let urlinicial = getComputedStyle(document.querySelectorAll(".imgn")[i].children[0]).getPropertyValue('background-image');
        let url = urlinicial.slice(5, urlinicial.length - 2);
        
        const repeated = data.find(bag => bag.pais === pais);
        if (repeated) {
            repeated.quantity += 1;
            localStorage.setItem("data", JSON.stringify(data));
        } else {
            const bagdata = {
                pais: pais,
                precio: precio,
                url: url,
                quantity: 1,
            }
            data.push(bagdata);
            localStorage.setItem("data", JSON.stringify(data));
            counterHeader.innerHTML = data.length;
        };
    });
});
