import React from "react";
import ReactDOM from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import ClassComponent from "./classComponent";

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)

root.render(
    <div>
        {/* Note que para passar um parâmetro do tipo NUMÉRICO usa-se CHAVES em vez de aspas! */}
        <ClassComponent label='Contador' initialValue={10} />
    </div>
)