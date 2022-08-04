import React, { useLayoutEffect, useState, useEffect } from 'react';
import axios from 'axios';
// import styled components library for styling our app...
import styled from "styled-components";
// import VideoCard component...
import VideoCard from '../components/VideoCard';


// Styling by Styled Component Library...
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default function Home({type}) {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const fetchVideosData = async () => {
            const response = await axios.get(`/videos/${type}`)
            setVideos(response.data)
        }
        fetchVideosData();
    },[type]);
    // useLayoutEffect to scroll to the top of the page when navigate to it...
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (    
        <Container>
            {videos.map(video => (<VideoCard key={video._id} video={video} />))}
            
            
        </Container>
    )
}
