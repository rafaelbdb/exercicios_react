import React from "react";
import ReactoDom from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import Primeiro, { Segundo } from './component'

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)

root.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
)