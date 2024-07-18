import React from 'react';
import { Button, Container,Row,Col } from 'react-bootstrap';

const Servidor = () => {
    return (
        <Container className='d-flex justify-content-center bg-white'>
            <Container>
            <input type="text" 
            aria-label='Ingrese un topico'
            />
            <Button>Crear</Button>
            </Container>
            <Row className='border'>
            
            </Row>
        </Container>
    );
};

export default Servidor;