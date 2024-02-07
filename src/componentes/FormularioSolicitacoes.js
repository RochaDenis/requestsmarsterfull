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
  flex-direction: column; /* Alteração aqui para empilhar verticalmente */
`;

const Div = styled.div`
  margin-top: 10px;
  margin-left: 150px;
  border-radius: 3%;
  background-color: aliceblue;
  width: 1000px;
  height: 500px;
`;

const InputTitulo = styled.input`
  width: 100%; /* Alteração aqui para ocupar toda a largura disponível */
  max-width: 1000px; /* Definindo largura máxima para evitar que se estenda */
  height: 40px;
  border-radius: 10px;
  border-color: silver;
`;

const Textarea = styled.textarea`
  width: 100%; /* Alteração aqui para ocupar toda a largura disponível */
  height: 100px;
  margin-top: 0px;
  border-radius: 10px;
  border-color: silver;
`;

const SelectCategoria = styled.select`
  width: 200px; /* Alteração aqui para ocupar toda a largura disponível */
  margin-top: 5px;
  height: 30px;
  margin-left: 20px;
  border-color: silver;
  border-radius: 5px;
  box-shadow: black;
  border: -30px;
`;

const Inputdata = styled.input`
  height: 30px;
  border-color: silver;
  border-radius: 5px;
  box-shadow: black;
  border: -30px;
  
`;

const ButtonSubmit = styled.button`
  width: 150px;
  height: 50px;
  margin-left: 400px;
  margin-top: 100px;
  border-color: silver;
  border-radius: 10px;
  box-shadow: black;
  border: -30px;
`;

const H3 = styled.h3`
  margin-top: 10px;
  color: black;
  margin-left: 5px;
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
        <H3>Título</H3>
        <InputTitulo
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          // placeholder="Título"
          required
        />
        <H3>Descrição</H3>
        <Textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          // placeholder="Descrição"
          required
        />
        <div>
          <Inputdata
            type="date"
            value={dataVencimento}
            onChange={(e) => setDataVencimento(e.target.value)}
          />
          <SelectCategoria
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Selecione a categoria</option>
            <option value="categoria1">Compras</option>
            <option value="categoria2">Vendas</option>
            <option value="categoria3">RH</option>
          </SelectCategoria>
        </div>
        <ButtonSubmit type="submit">Enviar Solicitação</ButtonSubmit>
      </Form>
    </Div>
  );
};

export default FormularioSolicitacao;
