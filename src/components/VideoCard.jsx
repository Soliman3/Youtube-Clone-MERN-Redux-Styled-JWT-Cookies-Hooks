import React from 'react';
import { Link } from 'react-router-dom';

// import styled components library for styling our app...
import styled from 'styled-components';

// import videoVardImage from images folder...
import videoCardImage from '../images/videoCard.jpg'
// import ChannelImage from images folder...
import ChannelImage from '../images/AccountImage.jpg';


// Styling...
// Styled component for (div) for makeing Main Container of Video Card...
const Container = styled.div`
    width: 294px;
    cursor: pointer;
    margin-bottom: 45px;
    

`
// Styled component for (img) for makeing Video Image...
const VideoImage = styled.img`
    width: 100%;
    height:167px;
    background: gray;
    object-fit: cover;
`
// Styled component for (div) for wrapping Video Details in it...
const VideoDetails = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px
`
// Styled component for (img) for Channel Image...
const AccountImage = styled.img`
    width: 36px;
    height:36px;
    border-radius: 50%;
    background-color: gray;
    object-fit: cover;
`
// Styled component for (div) just for containing Video text of title & info...
const VideoText = styled.div``

// Styled component for (h1) for Video Name...
const VideoName = styled.h1`
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.Alltext};
`
// Styled component for (h2) for Channel Name...
const AccountName = styled.h2`
    margin-top: 8px;
    margin-bottom: 2px;
    color: ${({ theme }) => theme.SoftText};
    font-size: 12px;
    font-weight: 400
`
// Styled component for (div) for Video info...
const VideoInfo = styled.div`
    color: ${({ theme }) => theme.SoftText};
    font-size: 12px;
    font-weight: 300
`
// React functional component for Video Cards...
export default function VideoCard() {
    return (
        <Link to="/video/123" style={{color: 'inherit', textDecoration: 'inherit'}}>
            <Container>
                <VideoImage src={videoCardImage} />
                <VideoDetails>
                    <AccountImage src={ChannelImage} />
                    <VideoText>
                        <VideoName style={({theme})=> theme.Alltext}>Youtube Clone MERN Stack</VideoName>
                        <AccountName>K'eyush The Stunt Dog</AccountName>
                        <VideoInfo>302,042 views • 10 days ago</VideoInfo>
                    </VideoText>
                </VideoDetails>
            </Container>
        </Link>
    )
}
