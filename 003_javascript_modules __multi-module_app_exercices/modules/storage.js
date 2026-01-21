
export function getStoredProducts () {
    const storedProducts = JSON.parse(localStorage.getItem("storedProducts")) || []
    return storedProducts;
}

export function storeProducts(products) {
    const savedProducts = JSON.stringify(products)
    localStorage.setItem("storedProducts", savedProducts);
}

