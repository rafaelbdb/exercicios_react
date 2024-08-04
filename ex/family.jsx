import React from 'react';
import {childrenWithProps} from '../utils/reactUtils'

export default (props) => (
    <div>
        <h1>Família {props.lastName}</h1>
        {/* Simplifica o código, utilizando a função genérica */}
        {childrenWithProps(props.children, props)}
    </div>
);
