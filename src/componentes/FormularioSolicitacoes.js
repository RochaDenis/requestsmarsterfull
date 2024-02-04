// FormularioSolicitacao.jsx
import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  text-align: center;
  margin-left: 50px;
  margin-top: 50px;

  .input {
    width: 100px;
  }
  

  /* &:hover {
    background-color: #000000;
  } */
`;

const Div = styled.div`
  margin-top: 10px;
  margin-left: 150px;
  border-radius: 3%;
  background-color: aliceblue;
  width: 1000px;
  height: 500px;

`;

const FormularioSolicitacao = ({ onSubmit }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataVencimento, setDataVencimento] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ titulo, descricao, dataVencimento, categoria });
    // Limpar os campos após o envio do formulário
    setTitulo("");
    setDescricao("");
    setDataVencimento("");
    setCategoria("");
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
          required
        />
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição"
          required
        />
        <input
          type="date"
          value={dataVencimento}
          onChange={(e) => setDataVencimento(e.target.value)}
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        >
          <option value="">Selecione a categoria</option>
          <option value="categoria1">Categoria 1</option>
          <option value="categoria2">Categoria 2</option>
          <option value="categoria3">Categoria 3</option>
        </select>
        <button type="submit">Enviar Solicitação</button>
      </Form>
    </Div>
  );
};

export default FormularioSolicitacao;
