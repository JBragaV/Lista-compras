import React, { useState } from 'react';

import CampoFormulario from '../campoFormulario';
import Botao from '../../components/botao';

const Formulario = () =>{

    const [dados, setDados] = useState({
        produto: '',
        quantidade: '',
    });
    //criar o estilo flex para o componente do formulario

    function ListeningEventInput(event){
        const {name, value} = event.target;
        setDados({...dados,[name]: value});
    }

    return (
        <form>
            <CampoFormulario 
                id="produto" 
                name="produto" 
                value={dados.produto} 
                nomeCampo = "Produto" 
                textoAjuda= "Informe o nome do produto"
                onChange = {ListeningEventInput}
            />
            <CampoFormulario 
                id="quantidade" 
                name="quantidade" 
                value={dados.quantidade} 
                nomeCampo = "Quantidade" 
                textoAjuda="Informe a quantidade a ser comprada"
                onChange = {ListeningEventInput}
            />
            <Botao cor="primary" texto="Adicionar" />
        </form>
    );
}

export default Formulario;