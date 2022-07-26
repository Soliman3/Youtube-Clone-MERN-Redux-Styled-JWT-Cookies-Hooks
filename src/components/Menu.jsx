import React from 'react';
// import styled components library for styling our app...
import styled from 'styled-components';

// import images from image folder...
import logoImage from '../images/youtubeLogo.png';

// Imported material icons from mui5 library...
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// Styling...
// Styled component for (div) for makeing the left side of youtube main menu list...
const Container = styled.div`
    flex:1;
    position: sticky;
    top:0;
    background-color: ${({theme})=> theme.LighterBackground};
    color: ${({theme})=> theme.AllText};
    font-size: 14px;
    height: 100vh
`;
// Styled component for (div) to wrap the main content of the container and giving it a padding...
const WrapperContainer = styled.div`
    padding: 18px 26px;
`;

// Styled component for (div) contained youtube icon & displed clone name...
const Logo = styled.div`
    display:flex;
    gap:5px;
    align-items: center;
    font-weight: bold;
`;

// Styled component (img) for the youtube icon...
const YoutubeLogo = styled.img`
    height: 27px;
`;
// Styled component (div) for each item as row displaying...
const Line = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px
`
// Styled component (div) for login page (JWT)...
const StyledLogin = styled.div``
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
`
// Styled component (hr) for making breaks between main sections...
const HorizontalLine = styled.hr`
    border: solid 0.5px ${({theme})=> theme.SoftColor};
    margin: 10px 0px
`
// Styled component (div) for making topic - Best of Videos...
const BestVideos = styled.div`
    color: gray;
    font-weight: bold;
`

// React functional component for Menu (left side component of the main page)
export default function Menu({darkMode, setDarkMode}) {
    return (
        <Container>
            <WrapperContainer>
                <Logo>
                    <YoutubeLogo src={logoImage} />
                    Soliman
                </Logo>
                <Line>
                    <HomeIcon />
                    Home
                </Line>
                <Line>
                    <ExploreOutlinedIcon />
                    Explore
                </Line>
                <Line>
                    <SubscriptionsOutlinedIcon />
                    Subscriptions
                </Line>
                <HorizontalLine />
                <Line>
                    <VideoLibraryOutlinedIcon />
                    Library
                </Line>
                <Line>
                    <HistoryOutlinedIcon />
                    History
                </Line>
                <HorizontalLine />
                <StyledLogin>
                    Sign in to like videos, comment and subscribe
                    <LoginButton>
                        <AccountCircleOutlinedIcon />
                        SIGN IN
                    </LoginButton>
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
                <Line onClick={()=>setDarkMode(!darkMode)}>
                    <SettingsBrightnessOutlinedIcon />
                    {darkMode? 'Light': 'Dark'} Mode
                </Line>
            </WrapperContainer>
        </Container>
    )
}
