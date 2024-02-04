import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  color: black;
  font-size: 16px;
  display: flex;
  justify-content: center;
`;


const Cabecalho = () => {
  return(
    <Div>
      <h1>Solicitações</h1>
    </Div>
  )
};

export default Cabecalho;
