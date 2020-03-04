import React from 'react';
// import axios from 'axios';
import axios from '../../axios';

import './FullPost.css';

class FullPost extends React.Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || this.state.loadedPost.idb !== this.props.id) {
                axios.get('/bicis.json?orderBy="$key"&equalTo="' + this.props.id + '"')
                    .then(response => {
                        console.log(response);
                        const posts = [];
                        for (let key in response.data) {
                            posts.push({
                                ...response.data[key],
                                idb: key
                            });
                        }
                        console.log(posts);
                        this.setState({ loadedPost: posts[0] });
                    });
            }
        }

    }

    


    render() {
        let post = <p style={{ textAlign: 'center' }}>Pincha sobre una bici para saber más!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Cargando...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <article className="FullPost">
                    <h1>{this.state.loadedPost.referencia}</h1>
                    <p>Características: {this.state.loadedPost.texto}</p>
                    <p>Precio: {this.state.loadedPost.precio}</p>
                    <img src={this.state.loadedPost.imagen} alt="imagen"></img>
                </article>

            );
        }
        return post;
    }
}

export default FullPost;