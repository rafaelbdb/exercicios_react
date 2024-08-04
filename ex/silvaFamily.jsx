import React from "react";
import Member from './member';

export default props => (
    <div>
        {/* O componente `Member` (membro da família) é chamado passando-se os parâmetros */}
        <Member name='João' lastName='Silva' />
        <Member name='Maria' lastName='Silva' />
        <Member name='José' lastName='Silva' />
        <Member name='Pedro' lastName='Silva' />
    </div>
)