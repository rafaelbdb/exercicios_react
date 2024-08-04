import React from "react";
import ReactDOM from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import Family from "./family";
import Member from "./member";

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)

root.render(
    <div>
        <Family lastName='Silva'>
            <Member name='Guilherme' />
            <Member name='Rafael' />
            <Member name='Julia' />
        </Family>
    </div>
)