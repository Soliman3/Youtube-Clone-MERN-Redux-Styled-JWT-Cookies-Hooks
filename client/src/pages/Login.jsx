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
import { useNavigate } from 'react-router-dom';

// import icons from mui5 library...
import CloseIcon from '@mui/icons-material/Close';
import axiosPublic from '../utils/axiosInstance';




// Styling...
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;

color: ${({ theme }) => theme.AllText};
flex-direction: column;
width: 100%;
    height: 100%;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, 0.50);
    position: absolute;
    z-index: 8;
`;
const WrapperContainer = styled.div`
background-color: ${({ theme }) => theme.LighterBackground};
padding: 20px 40px;
border: 1px solid ${({ theme }) => theme.SoftColor};
border-radius: 6px;
box-shadow: 0px 13px 36px -15px rgba(117,112,112,0.62);
    -webkit-box-shadow: 0px 13px 36px -15px rgba(117,112,112,0.62);
    -moz-box-shadow: 0px 13px 36px -15px rgba(117,112,112,0.62);
`;
const Wrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    gap:10px;
    width:100%;
    display:table;
`
const Title = styled.h1`
font-size: 25px;
`;

const SubTitle = styled.h2`
font-size: 20px;
font-weight: 300;
`;

const Input = styled.input`
border: 1px solid ${({ theme }) => theme.SoftColor};
background-color: transparent;
padding: 15px 0px 15px 10px;
margin: 10px 0;
border-radius: 6px;
outline-color: #5B8AC7;
font-size:16px;
width:100%;
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
    display: table;
    flex-direction: column;
    align-items: center;
    background-colr: green;
    width:auto;
`

const Button = styled.button`
background-color: #065fd4;
color: white;
border-radius: 2px;
padding: 10px 20px;
font-weight: 500;
font-size:16px;
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
margin-top: 15px;
`;
const SignUpMessage = styled.span`
font-size:13px;
color: #065fd4;
`;

const TopWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: -20px;
`


// React functional component for Login Page...
export default function SignIn() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const handleSignIn = async (e) => {
        e.preventDefault()
        dispatch(loginStart())
        try {
            const response = await axiosPublic.post("/auth/signin", { name, password })
            dispatch(loginSuccess(response.data)).then(navigate("/"))
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
                .then((response) => { dispatch(loginSuccess(response.data)) }).then(navigate("/"))
        }).catch((error) => { dispatch(loginFailure(error)) });
    }

    // handle close login page
    const handleClose = () => {
        navigate("/")
    }
    return (
        <Container>
            {register ? <SignUp setRegister={setRegister} /> : <> <WrapperContainer> <Wrapper>
                <TopWrapper>
                <Title>Sign In</Title>
                <CloseIcon style={{top:'0', right: '0', cursor: 'pointer'}} onClick={handleClose} />
                </TopWrapper>
                <SubTitle>to continue to Video Clone</SubTitle>
                <InputForm>
                <Input placeholder='User name' onChange={(e)=>setName(e.target.value)}/>
                <Input placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
                </InputForm>
                <WrapperButton>
                    <Button onClick={handleSignIn}>Sign In</Button>
                    <Button onClick={signInWithGoogle}>Google Sign In</Button>
                    <SignUpMessage onClick={() => setRegister(true)}>Create new account</SignUpMessage>
                </WrapperButton>
                <WrapperButton>
                    
                </WrapperButton>
                </Wrapper>
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
