import React from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Bici from '../../components/Bici/Bici';
import FullPost from '../../components/FullPost/FullPost';
import Comentarios from '../../components/Comentarios/Comentarios';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends React.Component {
    state = {
        bicis: [],
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/bicis.json')
            .then(response => {
                let bicis = [];
                for (let key in response.data) {
                    bicis.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                bicis = bicis.slice(1, 4);
                console.log(bicis);
                this.setState({ bicis: bicis });
            }).catch(error => {
                this.setState({ error: true });
            });

        axios.get('/posts.json')
            .then(response => {
                let posts = [];
                for (let key in response.data) {
                    posts.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                //posts = posts.slice(1);
                console.log(posts);
                this.setState({ posts: posts });
            }).catch(error => {
                this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    deleteUpdatePostHandler = (id) => {
        console.log(id)
        axios.delete('/posts/' + id + '.json')
            .then(response => {
                alert('Comentario eliminado');
            });
    }

    render() {
        let bicis = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

        if (!this.state.error) {
            bicis = this.state.bicis.map(bici => {
                return <Bici
                    key={bici.idb}
                    titulo={bici.titulo}
                    clicked={() => this.postSelectedHandler(bici.idb)} />;
            });

            posts = this.state.posts.map(comentarios => {
                return <Comentarios
                    idb={comentarios.idb}
                    autor={comentarios.autor}
                    comentario={comentarios.comentario}
                    deleteUpdatePostHandler = {() => this.deleteUpdatePostHandler(comentarios.idb)} />;
            });
            
        }
        return (
            <div>
                <section className="Bicis">
                    {bicis}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    {posts}
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;