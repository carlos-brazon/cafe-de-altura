const buttons = document.querySelectorAll(".imgn button:last-child");
console.log(JSON.parse(localStorage.getItem("data"))==null);

if (!JSON.parse(localStorage.getItem("data"))==null) {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    console.log('si');
}
else{
    buttons.forEach((e, i) => {
        e.addEventListener('click', event => {
            event.preventDefault()
            let data = JSON.parse(localStorage.getItem("data")) || [];
            let pais = document.querySelectorAll(".imgn")[i].children[1].children[0].innerHTML;
            let precio = document.querySelectorAll(".imgn")[i].children[1].children[1].innerHTML;
            let urlinicial = getComputedStyle(document.querySelectorAll(".imgn")[i].children[0]).getPropertyValue('background-image');
            let url = urlinicial.slice(5, urlinicial.length - 2)
            const objeto =
            {
                pais: pais,
                precio: precio,
                url: url,
                quantity: 1
            }
            console.log(objeto);
            data.push(objeto)
            localStorage.setItem("data", JSON.stringify(data))

        })
    })
}
const savePokemon = (pais) => {
    const data2 = JSON.parse(localStorage.getItem("data")) || [];
    const repeated = data2.find(bag => bag.pais === pais);
    console.log(repeated);
    if (repeated) {
        repeated.quantity += 1;
        console.log(data2);
        localStorage.setItem("data", JSON.stringify(data2));
    } 
    // else {
    //     const pokeData = {
    //         pais: pais,
    //         name: name,
    //         img: img,
    //         quantity: 1
    //     }
    //     cart.push(pokeData);
    //     localStorage.setItem("cart", JSON.stringify(cart));
    // }
}
savePokemon(document.querySelectorAll(".imgn")[0].children[1].children[0].innerHTML)


// buttons.forEach((e, i) => {
//     e.addEventListener('click', event => {
//         event.preventDefault()
//         let data = JSON.parse(localStorage.getItem("data")) || [];
//         let pais = document.querySelectorAll(".imgn")[i].children[1].children[0].innerHTML;
//         let precio = document.querySelectorAll(".imgn")[i].children[1].children[1].innerHTML;
//         let urlinicial = getComputedStyle(document.querySelectorAll(".imgn")[i].children[0]).getPropertyValue('background-image');
//         let url = urlinicial.slice(5, urlinicial.length - 2)
//         const objeto =
//         {
//             pais: pais,
//             precio: precio,
//             url: url,
//             quantity: 1
//         }
//         console.log(objeto);
//         data.push(objeto)
//         localStorage.setItem("data", JSON.stringify(data))
//     })
// })

console.log(JSON.parse(localStorage.getItem('data')));

let url = getComputedStyle(document.querySelectorAll(".imgn")[0].children[0]).getPropertyValue('background-image').slice(5, getComputedStyle(document.querySelectorAll(".imgn")[0].children[0]).getPropertyValue('background-image').length - 2);
console.log(url);