import { useContext } from 'react';
import { ProductsContext } from '../context/products-context';
import { Image, Badge, Button } from 'react-bootstrap';

const Cart = () => {
    const {
        products,
        cart,
        setCart
    } = useContext(ProductsContext);

    const onClickHandler = (event, id) => {
        event.preventDefault();
        
        const product = products.find(product => product.id === id);

        // remove from cart
        const shallowCart = [...cart];

        if (product.incart === 1) {
            shallowCart.splice(shallowCart.indexOf(product), 1);
        }

        // each time add 1 item back to stock and remove one from cart
        product.incart--;
        product.instock++;

        setCart(shallowCart);
    };

    if (cart.length > 0) {
        return (
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {cart.map((product, i) => {
                    let url = `http://localhost:1337${product.image.formats.thumbnail.url}`;
    
                    return (
                        <li key={i}>
                            <div className="d-inline-block">
                                <Image src={url} width={50} roundedCircle></Image>
                            </div>
                            
                            <div className="d-inline-block mx-3">
                                <Button variant="primary" size="large">
                                    {product.name} <Badge className="bg-secondary">{product.incart}</Badge>
                                    <span className="visually-hidden">in cart</span>
                                </Button>
                            </div>
    
                            <input 
                                className="btn btn-danger" 
                                name={product.id} 
                                onClick={(event) => onClickHandler(event, product.id)}
                                type="submit"  
                                value={`- ${product.cost}$`} />
                        </li>
                    )
                })}
            </ul>
        )
    } else {
        return (
            <p>The cart is empty.</p>
        )
    }
    
}

export default Cart;