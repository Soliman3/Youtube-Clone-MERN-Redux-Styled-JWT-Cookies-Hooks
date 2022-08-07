import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import styled components library for styling our app...
import styled from 'styled-components';

// import ChannelImage from images folder...
// import ChannelImage from '../images/AccountImage.jpg';
import moment from 'moment';
import axios from 'axios';


// Styling...
// Styled component for (div) for makeing Main Container of Video Card...
const Container = styled.div`
    width: 294px;
    cursor: pointer;
    gap: 12px;
    margin-bottom: ${(props)=> props.type === 'sm'? '10px': '45px'};
    display: ${(props) => props.type === 'sm' && 'flex'};
    

`
// Styled component for (img) for makeing Video Image...
const VideoImage = styled.img`
    width: 100%;
    height:${(props)=> props.type === 'sm' ? '100px': '167px'};
    background: gray;
    object-fit: cover;
    flex:0.5;
    margin-bottom: ${(props)=> props.type === 'sm' && '10px'};
`
// Styled component for (div) for wrapping Video Details in it...
const VideoDetails = styled.div`
    display: flex;
    margin-top: ${(props)=> props.type === 'sm'? '3px': '10px'};
    gap: 12px;
    flex:1.5;
`
// Styled component for (img) for Channel Image...
const AccountImage = styled.img`
    width: 36px;
    height:36px;
    border-radius: 50%;
    background-color: gray;
    object-fit: cover;
    display: ${(props)=> props.type === 'sm' && 'none'};
`
// Styled component for (div) just for containing Video text of title & info...
const VideoText = styled.div``

// Styled component for (h1) for Video Name...
const VideoName = styled.h1`
    font-weight: 500;
    font-size: ${(props)=> props.type === 'sm'? '14px': '16px'};
    color: ${({ theme }) => theme.Alltext};
`
// Styled component for (h2) for Channel Name...
const AccountName = styled.h2`
    margin-top: 12px;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.SoftText};
    font-size: 12px;
    font-weight: 500;
`
// Styled component for (div) for Video info...
const VideoInfo = styled.div`
    color: ${({ theme }) => theme.SoftText};
    font-size: ${(props)=> props.type === 'sm'? '13px': '12px'};
    font-weight: 400;
`
// React functional component for Video Cards...
export default function VideoCard({ type, video }) {
    const [channel, setChannel] = useState({});
    useEffect(() => {
        const fetchChannelData = async () => {
            const response = await axios.get(`/users/find/${video.userId}`)
            setChannel(response.data)
        };
        fetchChannelData();
    }, [video.userId]);


    return (
        <Link to={`/video/${video._id}`} style={{color: 'inherit', textDecoration: 'inherit'}}>
            <Container type={type} >
                <VideoImage src={video.imgUrl} type={type}/>
                <VideoDetails type={type}>
                    <AccountImage src={channel.img} type={type}/>
                    <VideoText>
                        <VideoName style={({ theme }) => theme.Alltext} type={type}>{video.title}</VideoName>
                        <AccountName>{channel.name}</AccountName>
                        <VideoInfo>{video.views} views • {moment(video.createdAt).fromNow()}</VideoInfo>
                    </VideoText>
                </VideoDetails>
            </Container>
        </Link>
    )
}
