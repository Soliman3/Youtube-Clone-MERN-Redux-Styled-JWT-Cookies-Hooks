import styled from "styled-components";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

const Main = styled.div`
  flex: 7;
  
`
const Container = styled.div`
  display:flex;
  margin: 0px;
  

`
const WrapContainer = styled.div``

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <NavBar />
        <WrapContainer>
          <h2>Video Card area .........</h2>
          
        </WrapContainer>
      </Main>
    </Container>
  );
}

export default App;
