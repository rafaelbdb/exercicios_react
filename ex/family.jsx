import React from "react";

export default props => (
    <div>
        {/* Você pode chamar as `props` do compomente principal de forma direta */}
        <h1>Família {props.lastName}</h1>
        {/* Assim como a `prop` dos seus "filhos" via `props.children` */}
        {props.children}

        {/* 
            Importante! => Chamar dessa forma só funciona se o componente filho tiver APENAS UM prop!

            Se forem múltiplas props, será necessário fazer um MAP.
        */}
    </div>
)