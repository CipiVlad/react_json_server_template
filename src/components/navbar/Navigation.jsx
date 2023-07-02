import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand >Navbar Brand</Navbar.Brand>
                    <Nav className="">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/features" >Features</Nav.Link>
                        <Nav.Link as={Link} to="/pricing" >Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation


