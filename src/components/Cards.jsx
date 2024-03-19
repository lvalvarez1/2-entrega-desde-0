import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function ContainerFluidBreakpointExample() {

  return (
    <Container fluid="md">
      <Row className='ml-auto'>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>asdasd</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='bg-slate-500'>Go somewhere</Button>
        <div>
    <button className='p-2' onClick={() => handleCountChange(-1)}>
      -
    </button>
    <button className='p-2' onClick={() => handleCountChange(+1)}>
      +
    </button>
    <button className='p-2' onClick={() => handleAdd()}>
      Agregar al carrito
    </button>
  </div>
      </Card.Body>
    </Card></Col>
      
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Motorola Edge 40</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='bg-slate-500'>Go somewhere</Button>
        <div>
    <button className='p-2' onClick={() => handleCountChange(-1)}>
      -
    </button>
    <button className='p-2' onClick={() => handleCountChange(+1)}>
      +
    </button>
    <button className='p-2' onClick={() => handleAdd()}>
      Agregar al carrito
    </button>
  </div>
      </Card.Body>
    </Card></Col>
      
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Samsung Galaxy s23 Ultra</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='bg-slate-500'>Go somewhere</Button>
        <div>
    <button className='p-2' onClick={() => handleCountChange(-1)}>
      -
    </button>
    <button className='p-2' onClick={() => handleCountChange(+1)}>
      +
    </button>
    <button className='p-2' onClick={() => handleAdd()}>
      Agregar al carrito
    </button>
  </div>
      </Card.Body>
    </Card></Col>
      
        
      </Row>
    </Container>
  );
}

export default ContainerFluidBreakpointExample;