import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget.jsx';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-slate-800">
      <Container fluid>
        <Navbar.Brand href="#" className='text-white'>Comercio Reactivo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#productos" className='text-white'>Productos</Nav.Link>
            <NavDropdown className='bg-white' title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#celulares">Celulares</NavDropdown.Item>
              <NavDropdown.Item href="#notebooks">  Notebooks</NavDropdown.Item>
             </NavDropdown>
             <div className='ml-20 p-1 w-8'>
             < CartWidget/>
             </div>
             
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="ingrese texto"
              className="me-6"
              aria-label="Search"
            />
            <Button className="bg-slate-500" variant="outline-primary">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default NavScrollExample;