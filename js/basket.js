
const counterFloat = document.querySelector('.counter-float p');
const divPrincipalBags = document.querySelector('.coffebag');


const deleteBag = (pais) => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    // const bagToDelete = data.find(bag => true);
    const newBag = data.filter(bag => bag.pais !== pais);
    localStorage.setItem("data", JSON.stringify(newBag));
    console.log(newBag);
    paintBags(newBag);
    // // console.log(bag);
    // console.log(bagToDelete);
    // if (bagToDelete.quantity > 1) {
        //     bagToDelete.quantity -= 1;
        //     localStorage.setItem("data", JSON.stringify(data));
        //     paintPokemons(data);
        // } else {
            //     const newBag = data.filter(bag => bag.pais !== pais);
            //     localStorage.setItem("data", JSON.stringify(newBag));
            //     paintBags(newBag);
    // }
}


const paintBags = (bags) => {
    console.log(!bags.length);
    // if (!bags.length) {
        //     localStorage.setItem('data', JSON.stringify([]));
        //     counterFloat.innerHTML = 0;
        //     divPrincipalBags.innerText = "There is not Item";
        // }
        // else {
            const bagss = JSON.parse(localStorage.getItem('data'));
            counterFloat.innerHTML = bags.length;
            bagss.forEach((e, i) => {
            const bage = document.createElement("div");
            bage.classList="product flex";
            bage.innerHTML = (`
                                    <div class="basket-counter flex">
                                        <button class="basket-menos" onClick="deleteBag('${e.pais}')"></button>
                                        <p class="flex">${i + 1}</p>
                                        <div class="basket-mas"></div>
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
            
            divPrincipalBags.append(bage);

        const divDivider= document.createElement('div');
        divDivider.classList="basket-divider";
            divPrincipalBags.append(divDivider);
        });
        divPrincipalBags.lastChild.remove();
    // };
};

if (true) {
    paintBags(deleteBag);
}
else {
    divPrincipalBags.innerText = "No items in cart!";
}


