import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Lista from '../pages/lista';

const ROTAS = () => {
    return (
       <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/lista" component={Lista} />
            </Switch>
       </BrowserRouter> 
    );
}

export default ROTAS;