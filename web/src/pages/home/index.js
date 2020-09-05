import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';

import CampoFormulario from '../../components/campoFormulario';
import Botao from '../../components/botao';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

import './styles.css';

const Home = () =>{

    //Criar uma função que, toda a vez que entrar na página home, execute uma função parar validar o token //useEffect// document.title, para atualizar, mudar, o titulo da página

    const [user, setUser] = useState({
        nome: "",
        senha: "",
        redirect: false
    });

    function login(){
        setUser({
            nome: "",
            senha: "",
            redirect: true
        });
    };

    function ListeningEventInput(event){
        const {name, value} = event.target;
        setUser({...user,[name]: value});
    };

    return(
        user.redirect ? 
        (<Redirect to="/lista" />) 
        : 
        (
        <Fragment>
            <div id = "home">
            <Cabecalho idProp = {"cabecalho"} />
            <main id="login">
                <form>
                    <h1 className="titulo">Faça seu Login</h1>
                    <CampoFormulario 
                        id="nome" 
                        name="nome" 
                        value={user.nome} 
                        nomeCampo = "Nome" 
                        textoAjuda= "Informe o nome do usuario"
                        onChange = {ListeningEventInput}
                    />
                    <CampoFormulario 
                        id="senha" 
                        name="senha" 
                        value={user.senha} 
                        nomeCampo = "Senha" 
                        textoAjuda="Informe a senha"
                        onChange = {ListeningEventInput}
                        type = { "password" }
                    />
                    <Botao cor="primary" texto="Adicionar" acao={login}/>
                </form>
            </main>
            <Rodape idProp = {"rodape"} />
            </div>
        </Fragment>
        )
    );
}

export default Home;