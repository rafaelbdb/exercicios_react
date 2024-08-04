import React, { Component } from 'react';

// Define um componente de classe chamado Field
class Field extends Component {
    // Construtor do componente, que inicializa o estado
    constructor(props) {
        super(props); // Chama o construtor da classe pai (Component)
        this.state = { value: props.initialValue }; // Inicializa o estado com a prop initialValue

        /**
         * ==================
         * !!! IMPORTANTE !!!
         * ==================
         *
         * Faz o bind do método handleChange ao contexto do componente
         * Isso é necessário para que 'this' dentro de handleChange referencie a instância do componente
         *
         * O `bind(this)` é usado para garantir que `this` dentro do método `handleChange`
         * referencie a instância do componente Field.
         *
         * Sem o bind, `this` no método `handleChange` seria `undefined` (ou referenciaria o contexto errado),
         * resultando em erro ao tentar acessar ou modificar o estado.
         */
        this.handleChange = this.handleChange.bind(this);
    }

    // Método que lida com a mudança no input
    handleChange(event) {
        // Atualiza o estado com o valor atual do input
        this.setState({ value: event.target.value });
    }

    // Método render, que define o que será exibido na tela
    render() {
        return (
            <div>
                {/* Exibe o valor atual do estado */}
                <label>{this.state.value}</label>
                <br />
                {/* Input controlado: onChange chama handleChange e value é ligado ao estado */}
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        );
    }
}

// Exporta o componente Field como padrão
export default Field;
