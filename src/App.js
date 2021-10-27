import logo from './logo.svg';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <div className="container">
          <Navbar.Brand href="/">Ristorante Con Fusion</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Projectos</Nav.Link>
            <Nav.Link href="#">Foro</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
