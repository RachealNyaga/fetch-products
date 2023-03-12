import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext()

export function ProductsProvider({ children }) {
    let [products, setProducts] = useState([]) 
    let [categories, setCategories] = useState([])
    let [cartItems, setCart] = useState([])

    function fetchProducts() {
        fetch("https://dummyjson.com/products")
        .then ((response) => response.json())
        .then((data) => {
            setProducts(data.products);

            let cats = [];
            data.products.forEach(function(product) {
                if(cats.indexOf(product.category) === -1) cats.push(product.category)
            })
            setCategories(cats);
        })
    }
    
    useEffect (()=> {
        fetchProducts();
    },[])

    return (
        <ProductsContext.Provider value={{ categories: categories, products: products, cart: {cartItems:cartItems, setCart: setCart}}}>{children}</ProductsContext.Provider>
    )
}

export default ProductsProvider;