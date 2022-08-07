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
import MiniMenu from "./components/MiniMenu";
import Login from "./pages/Login";

// import Global theme...
import { lightTheme } from "./utils/Theme";
import GlobalStyles from "./utils/Global";
// Styling...

// Styled component for Main (div)...
const Main = styled.div`
  flex:${(props)=> props.type === 'sm'? '7.9': '7'};
  background-color: ${({ theme }) => theme.hardBackground};
  color: ${({ theme }) => theme.AllText};
  margin-left: 0;
  margin-top: 55px;
 
  
`
// Styled Component for (div) to styling main Container inside Main...
const Container = styled.div`
  display:flex;
  flex-direction: row;
  

  

`
// Styled component for (div) to wrapping Container...
const WrapContainer = styled.div`
  padding: 28px 28px;

 
`

// React functional component for App as the main body of the application...
function App() {
  const [MenuClicked, setMenuClicked] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
    
        <BrowserRouter>
          <NavBar MenuClicked={MenuClicked} setMenuClicked={setMenuClicked} />
          <Container>
            {MenuClicked ? <MiniMenu/> : <Menu/>}
            
            <Main>
              <GlobalStyles />
              <WrapContainer>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home type="random"/>} />
                    <Route path="trends" element={<Home type="trend"/>} />
                    <Route path="subscriptions" element={<Home type="sub"/>} />
                    <Route path="signin" element={<Login/>}/>
                    <Route path="video">
                      <Route path=":id" element={<Video />} />
                    </Route>
                  </Route>
                </Routes>
              </WrapContainer>
            </Main>
          </Container>
        </BrowserRouter>
  
    </ThemeProvider>
  );
}

export default App;
