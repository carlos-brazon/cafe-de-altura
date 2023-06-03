
const counterBody = document.querySelector('.basket-inicial h2 span')
const counterFloat = document.querySelector('.counter-float p');
const counterBag = document.querySelectorAll('.basket-counter p')
const divPrincipalBags = document.querySelector('.coffebag');
const subtotal = document.querySelector('.subtotal span');
const envio = document.querySelectorAll('input');
console.log(envio[0]);
const divenvio = document.querySelectorAll('.subtotal span')[1];
console.log(divenvio);
const h3envio= document.querySelectorAll('.basket-shipping')


envio[0].addEventListener('click', (event) =>{
    console.log(event);
    if (event) {
        divenvio.innerHTML
    }
})
envio[1].addEventListener('click', (event) =>{
    console.log(event);
    if (event) {
        divenvio.innerHTML=h3envio[1].lastElementChild.innerHTML 
    }
})
// const data = JSON.parse(localStorage.getItem("data")) || [];
// data.forEach(e =>{
//     subtotal.innerHTML=(e.precio.slice(0, -1).replace(',', '.'))
//     console.log(subtotal.innerHTM);
//     let tt= Number(subtotal.innerHTML)
//     console.log(tt);
//     tt+= Number(subtotal.innerHTML)
//     console.log(tt);
// })


const addBag = (pais, cantidad) => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(cantidad);
    if (cantidad >= 1) {
        data.forEach(e => {
            if (e.pais === pais) {
                e.quantity += 1
                localStorage.setItem("data", JSON.stringify(data))
                paintBags(data);
            }
        });
    }
}

const deleteBag = (pais, cantidad) => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    if (cantidad > 1) {
        data.forEach(e => {
            if (e.pais === pais) {
                e.quantity -= 1
                localStorage.setItem("data", JSON.stringify(data))
                paintBags(data);
            }
        });
    }
    else {
        const newBag = data.filter(bag => bag.pais !== pais);
        localStorage.setItem("data", JSON.stringify(newBag)); //no eliminar
        paintBags(newBag);
    }
}

const paintBags = (bags) => {
    divPrincipalBags.innerHTML = '';
    if (!bags.length) {
        localStorage.setItem('data', JSON.stringify([]));
        counterFloat.innerHTML = 0;
        divPrincipalBags.innerText = "There is not Item";
    }
    else {

        const bagss = JSON.parse(localStorage.getItem('data'));
        counterFloat.innerHTML = bags.length;
        counterBody.innerHTML = bags.length;

    //   envio.forEach(e =>{
    //       e.addEventListener('click', (event)=> {
    //         console.log(event);
    //           if (envio[0]) {
    //               divenvio.innerHTML=h3envio[1].lastElementChild.innerHTML
    //             } else{
    //                 divenvio.innerHTML
    //             }
    //         })
    //     })
        let subtotalPaint = 0
        bagss.forEach((e, i) => {
            e.precio = ((e.quantity * Number(e.precio.slice(0, -1).replace(',', '.'))).toFixed(2)).toString().replace('.', ',').concat(' €');

            subtotalPaint += (Number(e.precio.slice(0, -1).replace(',', '.')));
            

            const bage = document.createElement("div");
            bage.classList = "product flex";
            bage.innerHTML = (`
                                    <div class="basket-counter flex">
                                        <div class="basket-menos" onClick="deleteBag('${e.pais}','${e.quantity}')"></div>
                                        <p class="flex">${e.quantity}</p>
                                        <div class="basket-mas" onClick="addBag('${e.pais}','${e.quantity}')"></div>
                                    </div>
                                    <div class="basket-coffebag">
                                        <div class="basket-bag" style="background-image: url(${e.url});"></div>
                                    </div>
                                    <div class="basket-details">
                                        <a href="">${e.pais}</a>
                                        <p>Paquete de café, 250 gr</p>
                                    </div>
                                    <h3>${e.precio}</h3>
                                    `);
            counterBag.innerHTML = e.quantity

            divPrincipalBags.append(bage);

            const divDivider = document.createElement('div');
            divDivider.classList = "basket-divider";
            divPrincipalBags.append(divDivider);
        });
        divPrincipalBags.lastChild.remove();
        subtotal.innerHTML = subtotalPaint.toFixed(2).concat(' €');
    };
};

if (JSON.parse(localStorage.getItem('data'))) {
    paintBags(JSON.parse(localStorage.getItem("data")));
}
else {
    counterFloat.innerHTML = 0;
    counterBody.innerHTML = 0;
    divPrincipalBags.innerText = "There is not Item";
}





