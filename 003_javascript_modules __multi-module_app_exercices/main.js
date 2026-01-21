
/* async function fetchProducts() {
    try {
        const res = await fetch (`https://fakestoreapi.com/products`);
        const products = await res.json();
        return products;
    } catch (error) {
        console.error('Error fetching products data:', error);
    }
} */

/* function createProductCard (product){
    const productCard = document.createElement("div");
    productCard.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4', 'item-center', 'text-center', 'h-auto', 'w-70', 'hover:scale-105', 'transition-transform', 'duration-300');
    
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.title;
    productImage.classList.add("mb-2" , "h-40", "w-full", "object-contain");
    
    const productName = document.createElement("h3");
    productName.textContent = product.title;
    productName.classList.add('text-l', 'font-bold')

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price}`;
    productPrice.classList.add('text-gray-600', 'mt-2');

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productsContainer.appendChild(productCard);
}; */

////function to display the cards

/* async function displayProductCards() {
    const products = await fetchProducts();
    if (!products) return;
    products.forEach(product => {
        createProductCard(product);
    });
}; */

import { displayProductCards } from './modules/ui.js';

displayProductCards();    