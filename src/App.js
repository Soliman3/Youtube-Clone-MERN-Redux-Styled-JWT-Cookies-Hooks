import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import { darkTheme, lightTheme } from "./Theme";

const Main = styled.div`
  flex: 7;
  background-color: ${({theme})=> theme.hardBackground};
  color: ${({theme})=> theme.AllText}
`
const Container = styled.div`
  display:flex;
  margin: 0px;
`
const WrapContainer = styled.div``

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <NavBar />
          <WrapContainer>
            <h2>Video Card area .........</h2>
          </WrapContainer>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
