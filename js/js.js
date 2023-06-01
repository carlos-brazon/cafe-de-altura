const cartContainer = document.querySelector(".cart-container");

const cart = JSON.parse(localStorage.getItem("cart"));

const deleteBag = (id) => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    const bagToDelete = data.find(bag => bag.precio === id);
    if (bagToDelete.quantity > 1) {
        bagToDelete.quantity -= 1;
        localStorage.setItem("data", JSON.stringify(data));
        paintPokemons(data);
    } else {
        const newBag = data.filter(bag => bag.precio !== id);
        localStorage.setItem("data", JSON.stringify(newBag));
        paintPokemons(newBag);
    }
}

const paintPokemons = (pokemons) => {
    if (!pokemons.length) {
        cartContainer.innerText = "No items in cart!"
    }
    else {
        cartContainer.innerHTML = "";
        pokemons.forEach(pokemon => {
            const div = document.createElement("div");

            div.innerHTML = `<span>${pokemon.id}</span>
                             <h3>${pokemon.name}</h3>
                             <img src=${pokemon.img} />
                             <div>
                                <span>Quantity: ${pokemon.quantity}</span>
                                <button onClick="deletePokemon('${pokemon.id}')">Delete</button>
                             </div>
                            `;

            cartContainer.append(div);
        });
    }
}

if (cart) {
    paintPokemons(cart, cartContainer);
}
else {
    cartContainer.innerText = "No items in cart!";
}