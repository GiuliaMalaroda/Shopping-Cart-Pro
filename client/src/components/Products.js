import axios from 'axios';
import { useEffect, useContext } from 'react';
import { ProductsContext } from '../context/products-context';
import { Image, Badge, Button } from 'react-bootstrap';

const Products = () => {
    const {
        products,
        setProducts,
        cart,
        setCart
    } = useContext(ProductsContext);
    
    useEffect(() => {
        axios
            .get('/products')
            .then(response => {
                setProducts(response.data);
            })
    }, [setProducts]);

    const onClickHandler = (event, id) => {
        event.preventDefault();

        const product = products.find(product => product.id === id);

        // add to cart
        const shallowCart = [...cart];
        if (shallowCart.indexOf(product) >= 0) {
            product.incart++;
        } else {
            shallowCart.push(product);
            product.incart = 1;
        }
        setCart(shallowCart);

        // each time remove 1 item from stock
        product.instock--;
    };

    return (
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            {products.map((product, i) => {
                let url = `http://localhost:1337${product.image.formats.thumbnail.url}`;

                return (
                    <li key={i}>
                        <div className="d-inline-block">
                            <Image src={url} width={50} roundedCircle></Image>
                        </div>
                        
                        <div className="d-inline-block mx-3">
                            <Button variant="primary" size="large">
                                {product.name} <Badge className="bg-secondary">{product.instock}</Badge>
                                <span className="visually-hidden">{product.instock ? "in stock" : "out of stock"}</span>
                            </Button>
                        </div>

                        <input 
                            className="btn btn-success" 
                            name={product.id} 
                            onClick={(event) => onClickHandler(event, product.id)}
                            type="submit"  
                            value={`+ ${product.cost}$`} 
                            disabled={product.instock === 0} />
                    </li>
                )
            })}
        </ul>
    )
}

export default Products;