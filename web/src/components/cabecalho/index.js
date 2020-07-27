import React from 'react';

const Cabecalho = props => {

    const{ idProp } = props;

    return(
        <header id={idProp}>
            <p>Ainda preciso terminar o cabeçalho!!!! Ideias: Logo, Link e o nome do usuario se logado</p>
            <p>Ler documentação do ciclho de vida do React</p>
            <p>Caso o token ainda esteja valido, manter o redirecionamento para a lista</p>
        </header>
    );
}

export default Cabecalho;