import mqtt from 'mqtt';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Cliente = ({ }) => {
    const [mensaje, setMensaje] = useState("");
    const [topico, setTopico] = useState("");
    const [client, setClient] = useState(null);
    const [conexion, setConexion] = useState("");
    useEffect(() => {
        const newClient = mqtt.connect("mqtt://test.mosquitto.org:8080");
        setClient(newClient);

        newClient.on("connect", () => {
            console.log("Conectado al broker MQTT");
        });

        newClient.on("message", (topic, message) => {
            console.log(`Mensaje recibido en tópico ${topic}: ${message.toString()}`);
            setMensaje(message.toString());
        });

        return () => {
            if (newClient) {
                newClient.end();
            }
        };
    }, []);
    const conectar = () => {
        if (client) {
            client.subscribe(topico, (err) => {
                if (!err) {
                    setConexion(`Suscrito al tópico ${topico}`);
                } else {
                    setConexion(`Error al suscribirse: ${err}`);
                }
            });
        }
    };

    return (
        <Container className='d-flex flex-column justify-content-center '>
            <Container className='d-flex justify-content-center'>
                <h3 className='fs-3 me-5'>Selecciona el topico a escuchar:</h3>
                <input type="text"
                    placeholder='Ingrese un topico...'
                    onChange={(e)=>setTopico(e.target.value)}
                />
                <Button variant="danger" onClick={conectar} className='ms-1'>Suscribir</Button>
            </Container>
            <Row className='border rounded bg-dark' style={{ with: "50%", height: "500px" }}>
                {
                    conexion!==""?
                    (<>
                        <h2 className='fs-2 text-center'>{conexion}</h2>
                        <h2>Esperando mensajes nuevos...</h2>
                    </>
                    ):<></>
                }
                <Container className='d-flex flex-column'>
                    <h5 className='fs-5 text-primary'>{mensaje}</h5>
                </Container>
            </Row>
        </Container>
    );
};

export default Cliente;