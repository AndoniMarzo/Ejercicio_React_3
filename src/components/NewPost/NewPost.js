import React from 'react';
// import axios from 'axios';
import axios from '../../axios';

import './NewPost.css';

import { Form, Button } from 'react-bootstrap';

class NewPost extends React.Component {
    state = {
        autor: '',
        comentario: ''
    }

    postDataHandler = () => {
        const data = {
            autor: this.state.autor,
            comentario: this.state.comentario
        };

        axios.post('/posts.json', data)
            .then(response => {
                alert('Comentario enviado');
            });
    }

    render() {
        return (
            <article className="NewPost">
                <h2>Añade un nuevo comentario</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Autor
                        </Form.Label>
                        <Form.Control value={this.state.autor} onChange={(event) => this.setState({ autor: event.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Comentario
                        </Form.Label>
                        <Form.Control as="textarea" rows="3" value={this.state.comentario} onChange={(event) => this.setState({ comentario: event.target.value })} />
                    </Form.Group>
                    <Button onClick={this.postDataHandler}>
                        Enviar
                    </Button>
                </Form>
            </article>
        );
    }
}

export default NewPost;