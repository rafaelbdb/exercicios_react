import React from "react";

export default props => (
    // Importante sempre retornar uma DIV principal que englobará tudo!
    <div>
        {/*
            Os parâmetros passados pelo `silvaFamily.jsx` via chamada do componente `<Member .../>`
            São interceptados aqui através dos `props` (propriedades)
        */}
        {props.name} <strong>{props.lastName}</strong>
    </div>
)