import mqtt from 'mqtt';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Cliente = ({ }) => {
    const [mensaje, setMensaje] = useState("");
    const [topico, setTopico] = useState("");
    const [client, setClient] = useState(null);

    useEffect(() => {
        // Crear la conexión MQTT solo una vez
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
                    console.log(`Suscrito al tópico ${topico}`);
                } else {
                    console.log(`Error al suscribirse: ${err}`);
                }
            });
        }
    };
    useEffect(() => {
        console.log(mensaje,topico)
    }, [mensaje,topico])
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
                <h2>Esperando mensajes...</h2>
                <Container className='d-flex flex-column'>
                    <h5 className='fs-5'>{mensaje}</h5>
                </Container>
            </Row>
        </Container>
    );
};

export default Cliente;