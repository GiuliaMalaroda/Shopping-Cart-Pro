import { useContext } from 'react';
import { ProductsContext } from '../context/products-context';
import { Alert, Table } from 'react-bootstrap';

const Checkout = () => {
    const {
        cart
    } = useContext(ProductsContext);

    const total = () => {
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            let price = cart[i].incart * cart[i].cost;
            console.log(price);
            total = total + price;
        }
       return total;
    }

    if (cart.length === 0) {
        return (
            <Alert variant="info">
                Add something to your cart to see checkout details.
            </Alert>
        )
    } else {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, i) => {
                        let price = product.cost * product.incart;

                        return (
                            <tr key={i}>
                                <td>{product.name}</td>
                                <td>x{product.incart}</td>
                                <td>{price} $</td>
                            </tr>
                        )
                    })}
                    <tr style={{ fontWeight: "700" }}>
                        <td colSpan="2" style={{ textAlign: "right" }}>Total</td>
                        <td>{total()} $</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Checkout;