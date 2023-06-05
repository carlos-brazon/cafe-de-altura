// const bags= [
//     {pais:'Costa Rica Tarrazú', precio:9, url: "http://127.0.0.1:5500/proyectos-github/cafe-de-altura/assets/Coffee%20bag.png"},
//     {pais:'Colombia Los Naranjos', precio:9, url: "http://127.0.0.1:5500/proyectos-github/cafe-de-altura/assets/Coffee%20bag2.png"},
//     {pais:'Laos Amanecer', precio:9, url: "http://127.0.0.1:5500/proyectos-github/cafe-de-altura/assets/Coffee%20bag3.png"},
//     {pais:'Etiopía Yrgacheff', precio:9, url: "http://127.0.0.1:5500/proyectos-github/cafe-de-altura/assets/Coffee%20bag4.png"},
//     {pais:'Kenia Ndunduri', precio:15, url: "http://127.0.0.1:5500/proyectos-github/cafe-de-altura/assets/Coffee%20bag5.png"},
//     {pais:'Etiopía Sidamo', precio:17, url: "http://127.0.0.1:5500/proyectos-github/cafe-de-altura/assets/Coffee%20bag6.png"},
//     {pais:'Costa Rica Monte Bello', precio:12, url: "http://127.0.0.1:5500/proyectos-github/cafe-de-altura/assets/Coffee%20bag7.png"},
//     {pais:'Colombia La Casita', precio:9, url: "http://127.0.0.1:5500/proyectos-github/cafe-de-altura/assets/Coffee%20bag8.png"},
// ];

// const changebags = (precio) => {
//    return precio.toFixed(2).replace('.', ',')
// }

// const card2= document.querySelector('.cards2')
// bags.forEach(bag =>{
//     const div= document.createElement('div');
//     div.classList='imgn flex'
//     div.innerHTML= `<img src=${bag.url} alt="img bag">
//                     <div class="price flex">
//                         <a href="">${bag.pais}</a>
//                         <p>${changebags(bag.precio)} €</p>
//                     </div>
//                     <button class="buttonAñadir">Añadir</button>
//                     `;
//                     card2.append(div)
// });
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
