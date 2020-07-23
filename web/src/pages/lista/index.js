import React, { Fragment, useState } from 'react';

import CampoFormulario from '../../components/campoFormulario';
import Botao from '../../components/botao';

import './styles.css';

const Lista = () =>{

    const [dados, setDados] = useState({
        produto: '',
        quantidade: '',
    });

    const [teste, setTeste] = useState([]);
    //criar o estilo flex para o componente do formulario
    const adcionar = () =>{
        teste.push(dados);
        setTeste(teste);
        setDados({
            produto: "",
            quantidade: ""
        });
    };

    function ListeningEventInput(event){
        const {name, value} = event.target;
        setDados({...dados,[name]: value});
    };

    return (
        <Fragment>
            <div id="lista-page">
                <header id="cabecalho">
                    Ola mundo
                </header>
                <main id="principal">
                    <table id="items-compras">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teste.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.produto}</td>
                                    <td>{item.quantidade}</td>
                                    <td className="centraliza-btn-jc">
                                        <div>
                                            <Botao cor="primary" texto="Atualizar" acao={()=> alert(`Atualizar o item de id ${index}`)}/>
                                        </div>
                                        <div>
                                            <Botao cor="primary" texto="Deletar" acao={()=> alert(`Deletar o item de id ${index}`)}/>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
                <aside id="aside">
                    <form id="flex">
                        <div>
                            <div>
                                <CampoFormulario 
                                    id="produto" 
                                    name="produto" 
                                    value={dados.produto} 
                                    nomeCampo = "Produto" 
                                    textoAjuda= "Informe o nome do produto"
                                    onChange = {ListeningEventInput}
                                />
                            </div>
                            <div>
                                <CampoFormulario 
                                    id="quantidade" 
                                    name="quantidade" 
                                    value={dados.quantidade} 
                                    nomeCampo = "Quantidade" 
                                    textoAjuda="Informe a quantidade a ser comprada"
                                    onChange = {ListeningEventInput}
                                />
                            </div>
                        </div>
                        <div>
                            <Botao cor="primary" texto="Adicionar" acao={adcionar}/>
                        </div>
                    </form>
                </aside>
                <footer id="rodape">asdasd</footer>
            </div>
        </Fragment>
    );
}

export default Lista;

/*
                    <div>
                        <TextField 
                            label="Produto"
                            style={{ marginBottom: 28}}
                            helperText="Full width!"
                            fullWidth
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField 
                            label="Quantidade"
                            fullWidth
                            variant="filled"
                        />
                    </div>
                    <div>
                        Falta o componente butão 
                    </div>
*/