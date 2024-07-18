import React, { useEffect } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navegador = ({rutaActual,NavegarRuta}) => {
    const navegar = useNavigate();
    return (
        <div className='container'>
            <Breadcrumb className='bg-white ms-4'>
                <Breadcrumb.Item onClick={() =>{ navegar("/") ,NavegarRuta("/")}}>Inicio</Breadcrumb.Item>
                {
                    rutaActual !== "/" ? (
                        rutaActual == "/Cliente" ?
                            (<Breadcrumb.Item onClick={() => navegar("")} active>Cliente</Breadcrumb.Item>) :
                            (<Breadcrumb.Item onClick={() => navegar("")} active>Servidor</Breadcrumb.Item>))
                        : <></>
                }
            </Breadcrumb>

        </div>
    );
};


export default Navegador;