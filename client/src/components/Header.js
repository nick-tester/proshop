import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <span className="brand-main">Pro</span>
            <span className="brand-sub">Shop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
              <Nav.Link href="/auth/login"><FaUser /> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
};

export default Header;