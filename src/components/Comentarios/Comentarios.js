import React from 'react';

import './Comentarios.css';

import {Row, Col, Button} from 'react-bootstrap';

const comentarios = (props) => (
    <article className="Comentarios">
        <Row>
            <Col xs={2}>

            </Col>
            <Col xs={6} className="Texto">
                {/*<p>Key: {props.idb}</p>*/}
                <p>Autor: {props.autor}</p>
                <p>Comentario: {props.comentario}</p>
            </Col>
            <Col xs={4}>
                <div className="Borrar">
                    <Button onClick={props.deleteUpdatePostHandler}>Eliminar</Button>
                </div>
            </Col>

        </Row>
    </article>
);

export default comentarios;