// import React Hooks...
import { useState } from "react";

// import required libraries for Page Routing & Styling....
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import main components...
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Video from "./pages/Video";

// import Global theme...
import { darkTheme, lightTheme } from "./Theme";

// Styling...
// Styled component for Main (div)...
const Main = styled.div`
  flex: 7;
  background-color: ${({theme})=> theme.hardBackground};
  color: ${({theme})=> theme.AllText}
`
// Styled Component for (div) to styling main Container inside Main...
const Container = styled.div`
  display:flex;
  margin: 0px;
`
// Styled component for (div) to wrapping Container...
const WrapContainer = styled.div`
  padding: 28px 28px;
`

// React functional component for App as the main body of the application...
function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <NavBar />
          <WrapContainer>
            <Routes>
              <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="video">
                  <Route path=":id" element={<Video/>}/>
                </Route>
              </Route>
            </Routes>
          </WrapContainer>
        </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
