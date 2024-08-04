import React from "react";
import ReactDOM from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import Field from "./field";

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)

root.render(
    <div>
        <Field initialValue='Teste' />
    </div>
)