import React from 'react';
import { Container,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Principal = ({NavegarRuta}) => {
    const navegar = useNavigate();
    const navegacion=(ruta)=>{
        navegar(ruta);
        NavegarRuta(ruta);
    }
    return (
        <Container className='bg-transparent border rounded d-flex flex-column justify-content-center align-items-center'>
            <Container className=''>
            <h1 className='fs-1 text-center'>¡Bienvenido a MauMqtt!</h1>
            <Container className='text-center'>
            <h2>¿Que deseas hacer?</h2>
            <Container className='d-flex justify-content-center'>
            <Button className="mx-2 p-2"variant='primary' onClick={()=>navegacion("/Servidor")} >Enviar mensajes</Button>
            <Button className="mx-2 p-2"variant='info' onClick={()=>navegacion("/Cliente")}>Recibir mensajes</Button>
            </Container>
            </Container>
            </Container>
        </Container>
    );
};

export default Principal;