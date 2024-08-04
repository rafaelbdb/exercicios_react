import React from 'react'

/**
 * Função genérica para trabalhar com as `props`
 * de qualquer componente Filho, não importando a quantidade
 */
function childrenWithProps(children, props) {
    return React.Children.map(children,
        child =>React.cloneElement(child, {...props})
    )
}

export {
    childrenWithProps
}