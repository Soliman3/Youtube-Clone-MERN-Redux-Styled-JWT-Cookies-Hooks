import React from 'react';

// import styled components library for styling our app...
import styled from 'styled-components';

// Imported material icons from mui5 library...
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


// Styling...
// Styled component for (div) for makeing the NavBar component...
const Container = styled.div`
    height: 55px;
    position: sticky;
    top: 0;
    background-color: ${({theme})=> theme.LighterBackground};
`;

// Styled component for (div) to wrap the main content of the container and giving it a padding...
const WrapperContainer = styled.div`
    display:flex;
    align-items: center; 
    height: 100%;
    padding: 0 25px;
    justify-content: flex-end;
    position: relative
`;

// Styled component for (div) for Search container...
const SearchContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 0px;
    right:0px;
    margin: auto;
    padding: 5px;
    border: solid 1px #ccc;
    border-radius: 4px;
    width: 38%;
`;

// Styled component for (input) for Search input...
const SearchInput = styled.input`
    border: none;
    background: transpatent;
    outline: none;
`
// styled componenet (button) for login button... 
const LoginButton = styled.button`
    font-weight: 500;
    cursor: pointer;
    color: #3ea6ff;
    background-color: transparent;
    border: solid 1px #3ea6ff;
    border-radius: 4px ;
    padding: 5px 20px;
    gap:4px;
    display: flex;
    align-items: center   
`;
export default function NavBar() {
  return (
    <Container>
      <WrapperContainer>
        <SearchContainer>
          <SearchInput placeholder='Search'/>
          <SearchOutlinedIcon />
        </SearchContainer>
        <LoginButton>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </LoginButton>

      </WrapperContainer>
    </Container>
  )
}
