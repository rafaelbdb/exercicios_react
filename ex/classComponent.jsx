import React, { Component } from 'react';

/**
 * Define um componente de classe chamado ClassComponent
 * que extende a classe `Component` do React
 */
export default class ClassComponent extends Component {
    // Construtor do componente, que inicializa o estado
    constructor(props) {
        // Chama o construtor da classe pai (Component)
        super(props);

        // Inicializa o estado com a prop `initialValue`
        this.state = { value: props.initialValue };
    }

    // Método que atualiza o estado somando um delta ao valor atual
    sum(delta) {
        this.setState({ value: this.state.value + delta });
    }

    // Método render, que define o que será exibido na tela
    render() {
        return (
            <div>
                {/* Exibe a prop label passada para o componente */}
                <h1>{this.props.label}</h1>
                {/* Exibe o valor atual do estado */}
                <h2>{this.state.value}</h2>
                {/* Botão para decrementar o valor do estado em 1 */}
                <button onClick={() => this.sum(-1)}>Dec</button>
                {/* Botão para incrementar o valor do estado em 1 */}
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        );
    }
}
