import React from 'react';
import { Carrinho } from './components/Carrinho';
import { CarrinhoBaixo } from "./components/CarrinhoBaixo"
import { GlobalStyle } from './styles/Global';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Carrinho />
          </Route>
          <Route path="/abaixo-de-dez">
            <CarrinhoBaixo />
          </Route>
        </Switch>
      
      <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
