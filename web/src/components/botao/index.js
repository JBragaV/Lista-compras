import React from 'react';

import Button from '@material-ui/core/Button';


const Botao = props =>{
    const { cor, texto, acao } = props;

    return(
        <Button variant="contained" fullWidth color={cor} onClick={acao}>{texto}</Button>
    );
}

export default Botao;