import React, { useLayoutEffect, useState } from 'react';
import SignUp from '../components/SignUp';
import { useDispatch } from 'react-redux';
// google auth..
import { auth, provider } from "../firebase";
// google sign in with google Popup...
import { signInWithPopup } from 'firebase/auth';

// import styled components library for styling our app...
import styled from 'styled-components';
import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from '../redux/useSlice';


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
width: 90%;
padding: 10px;
margin: 10px;
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
gap: 30px;
`;
const SignUpMessage = styled.span`
font-size:13px;
color: #5B8AC7;
`;


// React functional component for Login Page...
export default function SignIn() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
 
    const handleSignIn = async (e) => {
        e.preventDefault()
        dispatch(loginStart())
        try {
            const response = await axios.post("/auth/signin", { name, password })
            dispatch(loginSuccess(response.data))
        } catch (error) {
            dispatch(loginFailure())
        }
         
    }
    // useState to toggle between Sign In & and Sign Up forms...
    const [register, setRegister] = useState(false);

    // useLayoutEffect to scroll to the top of the page when navigate to it...
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    // Google signin onClick async function...
    const signInWithGoogle = async () => {
        dispatch(loginStart())
        signInWithPopup(auth, provider).then((result) => {
            axios.post('/auth/google', { name: result.user.displayName, email: result.user.email, img: result.user.photoURL })
                .then((response) => { dispatch(loginSuccess(response.data)) })
         }).catch((error) => { dispatch(loginFailure(error))});
    }
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
                    <Button onClick={signInWithGoogle}>Google Sign In</Button>
                    <SignUpMessage onClick={() => setRegister(true)}>Create new account</SignUpMessage>
                </WrapperButton>
                <WrapperButton>
                    
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
