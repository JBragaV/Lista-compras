import React, { Fragment, useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import Cabecalho from "../../components/cabecalho";
import Tabela from '../../components/tabela';
import CampoFormulario from '../../components/campoFormulario';
import Botao from '../../components/botao';
import Rodape from '../../components/rodape';

import './styles.css';

const Lista = () =>{

    const [open, setOpen] = useState(false);

    function handleOpen(){
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
    }
    const [openErro, setOpenErro] = useState(false);

    function handleOpenErro(){
        setOpenErro(true);
    }

    function handleCloseErro(){
        setOpenErro(false);
    }

    const [dados, setDados] = useState({
        produto: '',
        quantidade: '',
    });

    const [erros, setErros] = useState([
        {
            nome: "produto",
            mensagemAjuda: "Informe o nome do produto",
            statusErro: false,
        },
        {
            nome: "produto",
            mensagemAjuda: "Informe a quantidade a ser comprada",
            statusErro: false,
        }
    ]);

    const validador = dados =>{
        if(!dados.produto || !dados.quantidade) return false;

        return true;
    };

    const [lista, setLista] = useState([]);

    const adcionar = () =>{
        if(validador(dados)){
            lista.push(dados);
            setLista(lista);
            setDados({
                produto: "",
                quantidade: ""
            });
            zeraErros();
            handleOpen();
        }else{
            mensagemErros(dados);
        }
    };
    
    function mensagemErros(dados){
        if(dados.produto === "") {
            erros[0].mensagemAjuda = "Esse campor é obrigatório";
            erros[0].statusErro = true;
        }else{
            erros[0].mensagemAjuda = "";
            erros[0].statusErro = false;
        }
        
        if(dados.quantidade === ""){
            erros[1].mensagemAjuda = "Esse campor é obrigatório";
            erros[1].statusErro = true;
        }else{
            erros[1].mensagemAjuda = "";
            erros[1].statusErro = false;
        }   
        setErros([...erros]);      
    };

    function zeraErros(){
        erros[0].mensagemAjuda = "Informe o nome do produto";
        erros[0].statusErro = false;
        erros[1].mensagemAjuda = "Informe a quantidade a ser comprada";
        erros[1].statusErro = false;
        setErros([...erros]);   
    };

    function ListeningEventInput(event){
        const {name, value} = event.target;
        setDados({...dados,[name]: value});
    };

    function deletar(id){
        const listaTemp = lista.filter((item, index) => {
            return index !== id
        });
        setLista([...listaTemp]);
        handleOpenErro();
    };

    return (
        <Fragment>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="success">
                    Item adicionado com sucesso!!!
                </Alert>
            </Snackbar>
            <Snackbar open={openErro} autoHideDuration={3000} onClose={handleCloseErro}>
                <Alert onClose={handleCloseErro} variant="filled" severity="error">
                    Item Excluido com sucesso!!!
                </Alert>
            </Snackbar>
            <div id="lista-page">
                <Cabecalho idProp={"cabecalho"}/>
                <main id="principal">
                    <Tabela lista = {lista} deletar = {deletar} />
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
                                    textoAjuda= {erros[0].mensagemAjuda}
                                    onChange = {ListeningEventInput}
                                    erro = {erros[0].statusErro}
                                />
                            </div>
                            <div>
                                <CampoFormulario 
                                    id="quantidade" 
                                    name="quantidade" 
                                    value={dados.quantidade} 
                                    nomeCampo = "Quantidade" 
                                    textoAjuda = {erros[1].mensagemAjuda}
                                    onChange = {ListeningEventInput}
                                    erro = {erros[1].statusErro}
                                />
                            </div>
                        </div>
                        <div>
                            {true ? <Botao cor="primary" texto="Adicionar" acao={adcionar}/> : "Efetue o login para poder adicionar itens na lista"}
                        </div>
                    </form>
                </aside>
                <Rodape idProp={"rodape"}/>
            </div>
        </Fragment>
    );
}

export default Lista;