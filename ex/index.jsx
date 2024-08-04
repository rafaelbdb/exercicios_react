import React from "react";
import ReactDOM from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import ClassComponent from "./classComponent";

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)

root.render(
    <div>
        <ClassComponent value='Componente de Classe' />
    </div>
)