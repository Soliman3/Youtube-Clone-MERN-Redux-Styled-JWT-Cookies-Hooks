import React from 'react';
// import styled components library for styling our app...
import styled from 'styled-components';

// import Link to direct clicking on logo to home page route ('/')...
import { Link } from 'react-router-dom';

// Imported material icons from mui5 library...
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';

// import Designed icons from images folder...
import shorts from '../images/shorts.svg';
import explore from '../images/explore.svg';
import home from '../images/home.svg';

// Styling...
// Styled component for (div) for makeing the left side of youtube main menu list...
const Container = styled.div`
    flex:0.15;
    background-color: ${({ theme }) => theme.LighterBackground};
    color: ${({ theme }) => theme.AllText};
    font-size: 10px;
    height: 100vh;
    top: 55px;
    bottom:0px;
    right: 0; 
    left: 0;
    position:sticky;
    z-index: 2;
    
`;

// Styled component for (div) to wrap the main content of the container and giving it a padding...



// Styled component (div) for each item as row displaying...
const Line = styled.div`
    cursor: pointer;
    padding:19px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover{
        background-color: ${({ theme }) => theme.SoftColor};
    };
    
`;

// Styled component (img) for the  icons...
const DesignedIcons = styled.img`
    height: 19px;
    margin-bottom: 8px;
`;

// React functional component for Mini Menu (left side component of the main page with Only 5 main sections)
export default function MainiMenu() {
    return (
        <Container>
           
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Line>
                        <DesignedIcons src={home} />
                        Home
                    </Line>
                </Link>
                <Line>
                    <DesignedIcons src={explore} />
                    Explore
                </Line>
                <Line>
                    <DesignedIcons src={shorts} />
                    Shorts
                </Line>
                <Line>
                    <SubscriptionsOutlinedIcon />
                    Subscriptions
                </Line>
                <Line>
                    <VideoLibraryOutlinedIcon />
                    Library
                </Line>
            
        </Container>
    )
}
