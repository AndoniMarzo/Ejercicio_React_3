import React from 'react';

import './Bici.css';

const bici = (props) => (
    <article className="Bici" onClick={props.clicked}>
        <h1>{props.titulo}</h1>
    </article>
);

export default bici;