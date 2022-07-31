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
border-radius: 3px;
background-color: transparent;
width:100%;
padding: 10px;

`

const Button = styled.button`
background-color: #5B8AC7;
color: ${({ theme }) => theme.SoftColor};
border-radius: 3px;
padding: 10px 20px;
font-weight: 500;
border: none;
cursor: pointer;
align-items: left;
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
            <Input placeholder='User_Name' />
            <Input placeholder='Email' />
            <Input placeholder='Password' type='password' />
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
