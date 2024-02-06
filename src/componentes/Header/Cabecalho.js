import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  color: black;
  font-size: 16px;
  justify-content: center;
  display: flex;
`;


const Cabecalho = () => {
  return(
    <Header>
      <h1>Solicitações</h1>
    </Header>
  )
};

export default Cabecalho;
