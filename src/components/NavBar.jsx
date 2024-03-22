import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import companyLogo from  '../img/Logo-Qualy.png';

const NavBar = () => {
  return (
    <Navbar expand="lg" className='barra'>
      <Container>
        <Navbar.Brand href="/"><img src={companyLogo} alt=" " height="60" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
          <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Producto">Colageno</Nav.Link>

            {/* <Nav.Link><a className="text-decoration-none" href="mailto: contacto@qualyvie.com">Contacto</a></Nav.Link>

            <Nav.Link onClick={() => window.location = 'mailto: contacto@qualyvie.com'}>Contacto</Nav.Link> */}

            <Button variant="outline-secondary" className='rounded-pill' onClick={() => window.location = 'mailto:yourmail@domain.com'}>Contacto</Button>

          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;
