import { Container, Row, Col } from 'react-bootstrap';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Restock from './components/Restock';
import Checkout from './components/Checkout';

function App() {
    return (
        <>
            <Header />

            <main className="py-5">
                <Container>
                    <Row>
                        <Col md="6" lg="4">
                            <h4>Product List</h4>
                            <Products />

                            <hr />

                            <h5>Restock</h5>
                            <p>Do you need to restock? Just click the button below.</p>
                            <Restock />
                        </Col>
                        <Col md="6" lg="4">
                            <h4>Cart</h4>
                            <Cart />
                        </Col>
                        <Col md="6" lg="4">
                            <h4>Checkout</h4>
                            <Checkout />
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </>
    );
}

export default App;