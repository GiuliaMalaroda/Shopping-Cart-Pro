import axios from 'axios';
import { useContext } from 'react';
import { ProductsContext } from '../context/products-context';
import { Button } from 'react-bootstrap';

const Restock = () => {
    const {
        products,
        setProducts,
        cart
    } = useContext(ProductsContext);

    const onClickHandler = () => {
        axios
            .get('/products')
            .then(response => {
                const data = response.data;

                // instock values from db
                let instock = [];
                for (let i = 0; i < data.length; i++) {
                    instock.push(data[i].instock);
                };

                const shallowProducts = [...products];
                for (let i = 0; i < shallowProducts.length; i++) {
                    shallowProducts[i].instock = instock[i];
                }
                setProducts(shallowProducts);
            })
    }

    return (
        <div className="d-grid gap-2">
            <Button 
                variant="info" 
                onClick={onClickHandler}
                disabled={cart.length === 0}>
                Restock
            </Button>
        </div>
    )
}

export default Restock;