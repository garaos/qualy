import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar className='barra'>
      <Container>
        <Navbar.Brand href="/"><i className="fa-solid fa-dna"></i> Qualy Vie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
          <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Producto">Colageno</Nav.Link>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;
