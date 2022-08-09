import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import VideoCard from './VideoCard';

// Styling...
const Container = styled.div`
    flex: 2;
`;

// Recommended videos according to video tags...
export default function RecommendationVideo({ tags }) {
    
    const [videos, setVideos] = useState([])
    useEffect(() => {
        const fetchingVideos = async () => {
            const response = await axios.get(`/videos/tags?tags=${tags}`)
            setVideos(response.data)
        }
        fetchingVideos();
    },[tags])
  return (
    <Container>
          {videos.map(video => (<VideoCard key={video._id} video={video} type="sm"/>))}
    </Container>
  )
}
