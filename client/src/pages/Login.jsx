import React, { useLayoutEffect, useState } from 'react';
import SignUp from '../components/SignUp';

// import styled components library for styling our app...
import styled from 'styled-components';
import axios from 'axios';


// Styling by Styled Component Library...
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: calc(100vh - 55px);
color: ${({ theme }) => theme.AllText};
flex-direction: column;
`;
const WrapperContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.LighterBackground};
flex-direction: column;
padding: 20px 50px;
border: 1px solid ${({ theme }) => theme.SoftColor};
gap:10px;
border-radius: 5px;
`;
const Title = styled.h1`
font-size: 25px;
`;

const SubTitle = styled.h2`
font-size: 20px;
font-weight: 300;
`;

const Input = styled.input`
border: 1px solid ${({ theme }) => theme.SoftColor};
border-radius: 3px;
background-color: transparent;
width:100%;
padding: 10px;
`;

const Button = styled.button`
background-color: #5B8AC7;
color: ${({ theme }) => theme.SoftColor};
border-radius: 3px;
padding: 10px 20px;
font-weight: 500;
border: none;
cursor: pointer;
align-items: left;
`;
const More = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 150px;
font-size: 13px;
color: ${({ theme }) => theme.SoftText};
margin-top: 10px;
`;
const Links = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 15px;
`;
const HyperLink = styled.span`

`;
const WrapperButton = styled.div`
display: flex;
align-items: center;
gap: 150px;
`;
const SignUpMessage = styled.span`
font-size:13px;
color: #5B8AC7;
`;


// React functional component for Login Page...
export default function SignIn() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
 
    const handleSignIn = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("/auth/signin", { name, password })
         console.log(response.data);
        } catch (error) {
            
        }
         
    }
    // useState to toggle between Sign In & and Sign Up forms...
    const [register, setRegister] = useState(false);

    // useLayoutEffect to scroll to the top of the page when navigate to it...
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <Container>
            {register ? <SignUp setRegister={setRegister} /> : <><WrapperContainer>
                <Title>Sign In</Title>
                <SubTitle>to continue to Video Clone</SubTitle>
                <form>
                <Input placeholder='User_Name' onChange={(e)=>setName(e.target.value)}/>
                <Input placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
                </form>
                <WrapperButton>
                    <Button onClick={handleSignIn}>Sign In</Button>
                    <SignUpMessage onClick={() => setRegister(true)}>Create new account</SignUpMessage>
                </WrapperButton>

            </WrapperContainer>
            </>}
            <More>
                English - UK
                <Links>
                    <HyperLink>Help</HyperLink>
                    <HyperLink>Privacy</HyperLink>
                    <HyperLink>Terms</HyperLink>
                </Links>
            </More>
        </Container>
    )
}
