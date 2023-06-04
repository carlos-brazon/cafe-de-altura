const counterBody = document.querySelector('.basket-inicial h2 span');
const counterHeader = document.querySelector('.counter-float>a>p');
const counterBag = document.querySelectorAll('.basket-counter p');
const divPrincipalBags = document.querySelector('.coffebag');
const subtotal = document.querySelector('.subtotal span');
const precioEnvio = document.querySelectorAll('.subtotal span')[1];
const inputRadio = document.querySelectorAll('input');
const enviourgente= document.querySelector('#enviourgente');
const enviogratis= document.querySelectorAll('.basket-shipping');
const total=document.querySelector('.total span');
const textoIva=document.querySelector('.total p');
const iva=document.querySelector('.total p span');

const addBag = (pais, cantidad) => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
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
        localStorage.setItem("data", JSON.stringify(newBag));
        paintBags(newBag);
    }
}

const paintBags = (bags) => {
    divPrincipalBags.innerHTML = '';
    if (!bags.length) {
        localStorage.setItem('data', JSON.stringify([]));
        counterHeader.innerHTML = 0;
        counterBody.innerHTML = 0;
        total.innerHTML= '-';
        subtotal.innerHTML = '-';
        precioEnvio.innerHTML='-';
        textoIva.innerHTML='';
        divPrincipalBags.innerText = "There is not Item";
        enviourgente.checked=false;
        enviogratis.checked=false;
    }
    else {
        const data = JSON.parse(localStorage.getItem('data'));
        counterHeader.innerHTML = bags.length;
        counterBody.innerHTML = bags.length;

        let subtotalenNumero = 0;
        data.forEach((e) => {
            e.precio = ((e.quantity * Number(e.precio.slice(0, -1).replace(',', '.'))).toFixed(2)).toString().replace('.', ',').concat(' €');
            subtotalenNumero += (Number(e.precio.slice(0, -1).replace(',', '.')));
            let ivaenNumero=(Number(iva.innerHTML.replace(',', '.')));
            total.innerHTML= (subtotalenNumero.toFixed(2)).replace('.', ',').concat(' €');
            iva.innerHTML=(((subtotalenNumero)*1.21)-subtotalenNumero).toFixed(2);
            
            inputRadio[0].addEventListener('click', (event) =>{
                precioEnvio.innerHTML='GRATIS';
                total.innerHTML= (subtotalenNumero).toFixed(2).replace('.', ',').concat(' €');
                iva.innerHTML=(((subtotalenNumero)*1.21)-subtotalenNumero).toFixed(2);

            });
            inputRadio[1].addEventListener('click', (event) =>{
                precioEnvio.innerHTML=enviogratis[1].lastElementChild.innerHTML;
                let precioEnvioenNumero= Number(precioEnvio.innerHTML.slice(0, -1).replace(',', '.'));
                total.innerHTML= (subtotalenNumero+precioEnvioenNumero).toFixed(2).replace('.', ',').concat(' €');
                let totalenNumero= Number(total.innerHTML.slice(0, -1).replace(',', '.'));
                iva.innerHTML= ((totalenNumero*1.21)-totalenNumero).toFixed(2)
            });
            if (enviourgente.checked) {
                precioEnvio.innerHTML=enviogratis[1].lastElementChild.innerHTML;
                let precioEnvioenNumero= Number(precioEnvio.innerHTML.slice(0, -1).replace(',', '.'));
                total.innerHTML= (subtotalenNumero+precioEnvioenNumero).toFixed(2).replace('.', ',').concat(' €');
                let totalenNumero= Number(total.innerHTML.slice(0, -1).replace(',', '.'));
                iva.innerHTML= ((totalenNumero*1.21)-totalenNumero).toFixed(2)
            }
            
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
            counterBag.innerHTML = e.quantity;
            divPrincipalBags.append(bage);
            const divDivider = document.createElement('div');
            divDivider.classList = "basket-divider";
            divPrincipalBags.append(divDivider);
        });
        divPrincipalBags.lastChild.remove();
        subtotal.innerHTML = (subtotalenNumero.toFixed(2)).replace('.', ',').concat(' €');
    };
};

if (JSON.parse(localStorage.getItem('data'))) {
    paintBags(JSON.parse(localStorage.getItem("data")));
}
else {
    counterHeader.innerHTML = 0;
    counterBody.innerHTML = 0;
    divPrincipalBags.innerText = "There is not Item";
}