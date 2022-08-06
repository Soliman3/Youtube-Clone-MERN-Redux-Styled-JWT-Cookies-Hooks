import React from 'react';
// import styled components library for styling our app...
import styled from 'styled-components';

import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

// Styling by Styled Component Library...
const WrapperContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.LighterBackground}; 
flex-direction: column;
padding: 20px 50px;
border: 1px solid ${({ theme }) => theme.SoftColor};
gap:10px;
width: inherit;
border-radius: 20px;
box-shadow: 0px 5px 5px 0px rgba(0,41,158,0.3);

-webkit-box-shadow: 0px 5px 5px 0px rgba(0,41,158,0.3);

-moz-box-shadow: 0px 5px 5px 0px rgba(0,41,158,0.3);
`
const Title = styled.h1`
font-size: 25px;

`
const SubTitle = styled.h2`
font-size: 25px;
font-weight: 300;
`
const Text = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 6px;
`
const Input = styled.input`
border: 1px solid ${({ theme }) => theme.SoftColor};
background-color: transparent;
width: 100%;
padding: 15px 0px 15px 10px;
margin: 10px 0;
border-radius: 6px;
outline-color: #5B8AC7;
font-size:16px;
float:none;
&::placeholder{
    opacity: 0.70;
    font-weight: 400;
    font-color: black;
    font-size: 14px;
    
}
&:focus {
    outline: 3px solid hsla(220, 100%, 50%, 80%);
    box-shadow: 0px 0px 2px blue;
    &::placeholder{
        opacity: 0.5;
        font-color: gray;
    }
}
`;
const InputForm = styled.form`
    display: inherit;
    flex-direction: column;
    align-items: center;
    background-colr: green;
    width:100%;
`;

const Button = styled.button`
background-color: hsla(220, 100%, 50%, 80%);
color: white;
border-radius: 6px;
padding: 10px 20px;
font-weight: 500;
font-size:16px;
border: none;
cursor: pointer;
align-items: left;
width: 100%;
`
const WrapperButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const BackToSignIn = styled.span`
font-size:13px;
color: #CC0000;
margin-top: 10px;
display: flex;
align-items: center;
gap: 10px;
`
export default function SignIn({setRegister}) {
    return (
        <WrapperContainer>
            <Text>
                <Title>Sign Up</Title>
                <SubTitle>to create new account</SubTitle>
            </Text>
            <InputForm>
            <Input placeholder='User_Name' />
            <Input placeholder='Email' />
            <Input placeholder='Password' type='password' />
            </InputForm>
            <WrapperButton />
            <Button>Sign Up</Button>
            <BackToSignIn onClick={() => setRegister(false)}>
                
                <CancelPresentationIcon style={{opacity: '80%'}} />
                No, I have an account
            </BackToSignIn>
            <WrapperButton />
        </WrapperContainer>
    )
}
