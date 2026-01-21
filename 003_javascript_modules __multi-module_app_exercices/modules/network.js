import { getStoredProducts, storeProducts } from './storage.js';

export async function fetchProducts() {
    try {
        //check in local storage first
        const storedProducts = getStoredProducts();
        if (storedProducts.length > 0) {
            return storedProducts;
        }
        //fetch from API if not in local storage
        const res = await fetch (`https://fakestoreapi.com/products`);
        const products = await res.json();

        //save to local storage
        storeProducts(products);

        //return the array of products
        return products;

    } catch (error) {
        console.error('Error fetching products data:', error);
    }
}


