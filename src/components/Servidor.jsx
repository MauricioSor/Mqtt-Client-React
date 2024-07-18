import React, { useEffect, useState } from 'react';
import { Button, Container,Row,Col } from 'react-bootstrap';

const Servidor = () => {
    const [topico, setTopico] = useState()
    const [mensaje, setMensaje] = useState()

    const EnviarMensaje=()=>{
    EnviarMensaje(topico,mensaje).then((resp)=>{

    })
    }
    useEffect(()=>{
console.log(topico ,mensaje);
    },[topico,mensaje])
    return (
        <Container className='d-flex flex-column justify-content-center border rounded mt-5 bg-primary'>
            <Container className=''>
            <h4>¡Crea un nuevo topico!</h4>
            <input type="text" 
            aria-label='Ingrese un topico'
            onChange={(e)=>setTopico(e.target.value)} 
            />
            <Button variant="warning ms-1">Crear</Button>
            </Container>
            <Row className='border'>
            <h2 className='f2-2 text-center'>Escribe un mensaje</h2>
            <Col>
            <textarea name="mensaje" id="" style={{width:"100%"}}
            onChange={(e)=>setMensaje(e.target.value)} 
            />
            </Col>
            <Button variant="dark">Enviar</Button>
            </Row>
        </Container>
    );
};

export default Servidor;