import { useState } from "react";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { Data } from "../Data/Data";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao";

const FormularioSolicitacao = (props) => {
  const aoSolicitar = (evento) => {
    evento.preventDefault();
    props.aoRealizarSolicitacao({
      titulo,
      descricao,
      datainclusao,
      datavencimento,
      area,
    });
    setTitulo("");
    setDescricao("");
    setDataInclusao("");
    setDataVencimento("");
    setArea("");
  };

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [datainclusao, setDataInclusao] = useState("");
  const [datavencimento, setDataVencimento] = useState("");
  const [area, setArea] = useState("");

  return (
    <section className="formulario">
      <form onSubmit={aoSolicitar}>
        <h2>Preencha os dados para criar a solicitação</h2>
        <CampoTexto
          // obrigatorio={true}
          label="Titulo"
          placeholder="Digite o titulo"
          valor={titulo}
          aoAlterado={(valor) => setTitulo(valor)}
        />
        <CampoTexto
          // obrigatorio={true}
          label="Descrição"
          placeholder="Digite a descrição"
          valor={descricao}
          aoAlterado={(valor) => setDescricao(valor)}
        />
        <Data
          // obrigatorio={true}
          type="date"
          label="Data de Inclusão"
          valor={datainclusao}
          aoAlterado={(valor) => setDataInclusao(valor)}
        />
        <Data
          // obrigatorio={true}
          type="date"
          label="Data de Vencimento"
          valor={datavencimento}
          aoAlterado={(valor) => setDataVencimento(valor)}
        />
        <ListaSuspensa 
          // obrigatorio={true}
          label="Setor"
          itens={props.areas}
          valor={area}
          aoAlterado={valor=> setArea(valor)}
        />
        <Botao>
          Criar Solicitação
        </Botao>
      </form>
    </section>
  );
};

export default FormularioSolicitacao;
