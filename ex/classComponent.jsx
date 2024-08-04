import React, {Component} from 'react'

/**
 * Também é possível criar componentes em formato de CLASSE
 * (permitindo POO)
 */
export default class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}