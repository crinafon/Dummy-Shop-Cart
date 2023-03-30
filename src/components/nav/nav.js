import { Link } from "react-router-dom";
import {
    Navbar,
    Offcanvas,
    Nav,
    Container,
} from "react-bootstrap";
import {IoCart} from 'react-icons/io5';
import { useContext } from "react";
import {Context } from "../../context/store";
import "./nav.css";


const Navigation = () => {
    const { cart } = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Dummy Shop With Cart</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}/>
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
                style={{backgrroundColor: "black"}}
                />
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasLabel-expand-lg`}>
                        Dummy Shop
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/posts" className="nav-link">Posts</Link>
              <Link to="/comments" className="nav-link">Comments</Link>
              <Link to="/cart">
                <div style={{position: 'relative'}}>
                <IoCart color="white" size="2rem"/>
                <span className="nav-cart-qty">{cart.length}</span>
                </div>
              </Link>
            </Nav>
                </Offcanvas.Body>
            </Container>
        </Navbar>
    )
}

export default Navigation;