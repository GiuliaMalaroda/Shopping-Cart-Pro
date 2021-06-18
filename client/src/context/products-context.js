import { createContext, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    const value = {
        products,
        setProducts,
        cart,
        setCart
    }

    return (
        <ProductsContext.Provider
            value={value} >
            {children}
        </ProductsContext.Provider>
    );
};