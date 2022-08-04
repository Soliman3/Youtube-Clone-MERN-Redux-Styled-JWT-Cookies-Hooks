import React from 'react';
// import styled components library for styling our app...
import styled from 'styled-components';

// import Link to direct clicking on logo to home page route ('/')..
import { Link } from 'react-router-dom';

// Imported material icons from mui5 library...
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// import Designed icons from images folder...
import explore from '../images/explore.svg';
import home from '../images/home.svg';
import subscription from '../images/subscription.svg';
import library from '../images/library.svg';
import history from '../images/history.svg';

// Styling...
// Styled component for (div) for makeing the left side of youtube main menu list...
const Container = styled.div`
    flex:1.30;
    background-color: ${({ theme }) => theme.LighterBackground};
    color: ${({ theme }) => theme.AllText};
    font-size: 14px;
    height: 100vh;
    top: 55px;
    
    position:sticky;
    overflow-y:hidden;
    overflow-x:hidden;
    z-index: 2;
    &:hover{
        overflow-y:scroll;
    };
    
    }
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
    background-color: gray;
    border-radius: 25px;
    &:hover {
        background-color: ${({ theme }) => theme.SoftText};
        
        }
    }
`;

// Styled component for (div) to wrap the main content of the container and giving it a padding...


// Styled component (div) for each item as row displaying...
const Line = styled.div`
    cursor: pointer;
    padding:12px 26px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    
    &:hover{
        background-color: ${({ theme }) => theme.SoftColor};
    };
`;
// Styled component (div) for login page (JWT)...
const StyledLogin = styled.div`
    padding:8px 26px;`
// styled componenet (button) for login button... 
const LoginButton = styled.button`
    font-weight: 500;
    cursor: pointer;
    color: #3ea6ff;
    background-color: transparent;
    border: solid 1px #3ea6ff;
    border-radius: 4px ;
    padding: 5px 20px;
    margin-top: 5px;
    gap:4px;
    display: flex;
    align-items: center   
`;
// Styled component (hr) for making breaks between main sections...
const HorizontalLine = styled.hr`
    border: solid  0 ;
    background-color:${({ theme }) => theme.Lines};
    height: 0.5px;
    margin: 10px 0px;
    
`;
// Styled component (div) for making topic - Best of Videos...
const BestVideos = styled.div`
    color: gray;
    font-weight: bold;
    padding:10px 26px; 
`;

// Styled component (img) for the  icons...
const DesignedIcons = styled.img`
    height: 19px;
    padding-bottom: 4px;
    padding-left:2px;
`;

// React functional component for Menu (left side component of the main page)...
export default function Menu() {
    return (
        <Container>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Line>
                    <DesignedIcons src={home} />
                    Home
                </Line>
            </Link>
            <Link to="trends" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Line>
                    <DesignedIcons src={explore} />
                    Explore
                </Line>
            </Link>
            <Link to="subscriptions" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Line>
                    <DesignedIcons src={subscription} />
                    Subscriptions
                </Line>
            </Link>
            <HorizontalLine />
            <Line>
                <DesignedIcons src={library} />
                Library
            </Line>
            <Line>
                <DesignedIcons src={history} />
                History
            </Line>
            <HorizontalLine />
            <StyledLogin>
                Sign in to like videos, comment and subscribe
                <Link to="signin" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <LoginButton>
                        <AccountCircleOutlinedIcon />
                        SIGN IN
                    </LoginButton>
                </Link>

            </StyledLogin>
            <HorizontalLine />
            <BestVideos>
                BEST OF VIDEOS
            </BestVideos>
            <Line>
                <LibraryMusicOutlinedIcon />
                Music
            </Line>
            <Line>
                <SportsBasketballOutlinedIcon />
                Sports
            </Line>
            <Line>
                <SportsEsportsOutlinedIcon />
                Gaming
            </Line>
            <Line>
                <MovieOutlinedIcon />
                Movie
            </Line>
            <Line>
                <ArticleOutlinedIcon />
                News
            </Line>
            <Line>
                <LiveTvOutlinedIcon />
                Live
            </Line>
            <HorizontalLine />
            <Line>
                <SettingsOutlinedIcon />
                Settings
            </Line>
            <Line>
                <OutlinedFlagIcon />
                Report
            </Line>
            <Line>
                <HelpOutlineOutlinedIcon />
                Help
            </Line>
        </Container>
    )
}
