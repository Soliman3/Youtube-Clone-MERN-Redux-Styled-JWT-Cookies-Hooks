import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    
    
  }

  ::-webkit-scrollbar-corner {
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme})=> theme.SoftText};
    border-radius: 25px;
    &:hover {
        background-color: gray;
      }
  }
  
`

export default GlobalStyles;