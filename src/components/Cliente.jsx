import React from 'react';
import { Container ,Row,Col,Button} from 'react-bootstrap';

const Cliente = () => {
    return (
        <Container className='d-flex flex-column justify-content-center '>
            <h1>Envia mensajes al </h1>
            <Container>
            <input type="text" 
            aria-label='Ingrese un topico'
            />
            <Button>Crear</Button>
            </Container>
            <Row className='border' style={{with:"50%"}}>
            <h2>
            
            </h2>
            </Row>
        </Container>
    );
};

export default Cliente;