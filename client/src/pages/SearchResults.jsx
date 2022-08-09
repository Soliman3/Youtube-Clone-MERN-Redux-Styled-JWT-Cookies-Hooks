import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import VideoCard from '../components/VideoCard';


// Styling...
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
`;

export default function SearchResults() {

    const [videos, setVideos] = useState([])
    const searchQuery = useLocation().search;

    useEffect(() => {
        const fetchingVideos = async () => {
            const response = await axios.get(`/videos/search${searchQuery}`);
            setVideos(response.data);
        }
        fetchingVideos()
    }, [searchQuery])
    
  return (
    <Container>
          {videos.map(video => ( <VideoCard key={video._id} video={video} />))}
    </Container>
  )
}
