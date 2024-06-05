document.addEventListener("DOMContentLoaded", () => {
   
    const cart = [
        {
            id: 1,
            name: "Air Jordan 1 Low SE",
            category: "Men's Shoes",
            color: "White/Sail/Seafoam",
            size: "7.5",
            quantity: 1,
            price: 205.00,
            image: "/images/adidas1.png"
        },
        {
            id: 2,
            name: "Nike Air Force 1 Low Retro",
            category: "Men's Shoes",
            color: "Black/Black/Black",
            size: "7.5",
            quantity: 1,
            price: 189.90,
            originalPrice: 239.00,
            image: "/images/adidas5.png"
        }
    ];

    const cartItemsContainer = document.getElementById("cart-items");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");
    const cartCountElement = document.getElementById("cart-count");

    function renderCartItems() {
        cartItemsContainer.innerHTML = "";
        let subtotal = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const itemElement = document.createElement("div");
            itemElement.classList.add("flex", "items-center", "mb-4");
            itemElement.innerHTML = `
                <img class="w-40 h-18 object-cover" src="${item.image}" alt="${item.name}">
                <div class="ml-4">
                    <div class="text-lg text-black font-bold">${item.name}</div>
                    <div class="text-black">${item.category}</div>
                    <div class="text-black">${item.color}</div>
                    <div class="text-black">Size ${item.size}</div>
                    <div class="text-black">Quantity ${item.quantity}</div>
                    <div class="mt-2 text-lg text-black font-bold">
                        ${item.originalPrice ? `<span class="line-through text-gray-500">$${item.originalPrice.toFixed(2)}</span> ` : ''}
                        $${item.price.toFixed(2)}
                    </div>
                </div>
            `;

            cartItemsContainer.appendChild(itemElement);
        });

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${subtotal.toFixed(2)}`;
        cartCountElement.textContent = cart.length;
    }

    renderCartItems();
});
