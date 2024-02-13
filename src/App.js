import "./index.css";
import React from "react";
import Cabecalho from "./componentes/Header/Cabecalho";
import FormularioSolicitacao from "./componentes/Formulario/FormularioSolicitacoes";

const areas = [
  {
    id: 1,
    setor: 'Compras'
  },

  {
    id: 2,
    setor: 'Vendas'
  },
  {
    id: 3,
    setor: 'RH'
  }

]


const App = () => (
  <>
    <Cabecalho />
    <FormularioSolicitacao areas={areas.map(area => area.setor)}/>
  </>
);

export default App;
