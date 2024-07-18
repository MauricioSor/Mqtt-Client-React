import React, { useEffect } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navegador = ({rutaActual,NavegarRuta}) => {
    const navegar = useNavigate();
    return (
        <div className='container'>
            <Container className='bg-dark d-flex rounded'>
            <Breadcrumb className=' ms-4 mt-2'>
                <Breadcrumb.Item onClick={() =>{ navegar("/") ,NavegarRuta("/")}}>Inicio</Breadcrumb.Item>
                {
                    rutaActual !== "/" ? (
                        rutaActual == "/Cliente" ?
                        (<Breadcrumb.Item onClick={() => navegar("")} active>Cliente</Breadcrumb.Item>) :
                        (<Breadcrumb.Item onClick={() => navegar("")} active>Servidor</Breadcrumb.Item>))
                        : <></>
                    }
            </Breadcrumb>
        </Container>
        </div>
    );
};


export default Navegador;