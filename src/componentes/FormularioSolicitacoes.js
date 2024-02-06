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

  
`;

const Textarea = styled.textarea`
  width: 100%; /* Alteração aqui para ocupar toda a largura disponível */
  height: 100px;
  margin-top: 10px;
`;

const SelectCategoria = styled.select`
  width: 200px; /* Alteração aqui para ocupar toda a largura disponível */
`;

const ButtonSubmit = styled.button`
  width: 150px;
  height: 50px;
  margin-left: 400px;
  margin-top: 100px;

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
        <InputTitulo
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
          required
        />
        <Textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição"
          required
        />
        <div>
        <input
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
          <option value="categoria1">Categoria 1</option>
          <option value="categoria2">Categoria 2</option>
          <option value="categoria3">Categoria 3</option>
        </SelectCategoria>
        </div>
        <ButtonSubmit type="submit">Enviar Solicitação</ButtonSubmit>
      </Form>
    </Div>
  );
};

export default FormularioSolicitacao;
