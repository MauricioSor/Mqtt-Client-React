import React from 'react';
import { Container ,Row,Col,Button} from 'react-bootstrap';

const Cliente = ({}) => {
    
    return (
        <Container className='d-flex flex-column justify-content-center '>
            <Container className='d-flex justify-content-center'>
            <h3 className='fs-3 me-5'>Selecciona el topico a escuchar:</h3>
            <input type="text" 
            placeholder='Ingrese un topico...'
            />
            <Button variant="danger" className='ms-1'>Suscribir</Button>
            </Container>
            <Row className='border rounded bg-dark' style={{with:"50%",height:"500px"}}>
            <h2>Esperando mensajes...</h2>
            <Container className='d-flex flex-column'>
                <h5 className='fs-5'>{}</h5>
            </Container>
            </Row>
        </Container>
    );
};

export default Cliente;