import React from "react";

/** 
 * O componente exportado como `default` não precisa de nome
 * 
 * Poderá ser importado com um nome arbritrário, sem uso de { Chaves }
 * no arquivo de destino.
 * 
 * Também pode-se omitir os parênteses da arrow-function,
 * quando se passa apenas um parâmetro.
 * 
 * A arrow-function também permite omitir o uso de chaves ao redor dos parênteses.
 */
export default props => (
    <h1>Primeiro Componente!</h1>
)

/**
 * Outros componentes precisarão ser nomeados
 * 
 * Será necessário chamá-los pelo nome especificado aqui,
 * sempre dentro de { Chaves }
 */
export const Segundo = props => (
    <h1>Segundo Componente!</h1>
)

/**
 * Também é possível exportar os componentes de modo agrupado,
 * omitindo-se a palavra `export` na criação de cada componente
 * 
 * Particularmente, eu prefiro este formato, por ser mais flexível.
 * Caso você queira deixar de exportar algum componente, basta comentar seu nome da lista:
 */

/*
export { 
    Primeiro
    , Segundo 
}
*/ 