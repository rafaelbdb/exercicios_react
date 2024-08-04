import React from "react";
import ReactoDom from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import SilvaFamily from "./silvaFamily";

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)

root.render(
    <div>
        <SilvaFamily />
    </div>
)