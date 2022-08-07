import React, { useEffect, useLayoutEffect, useState } from 'react';
// import styled components library for styling our app...
import styled from 'styled-components';

// Imported material icons from mui5 library...
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// import ChannelImage from images folder...
import ChannelImage from '../images/AccountImage.jpg';
// import Comments component...
import Comments from '../components/Comments';
import VideoCard from '../components/VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { fetchingFailure, fetchingStart, fetchingSuccess } from '../redux/videoSlice';
import moment from 'moment';

// Styling...
const Container = styled.div`
  display: flex;
  gap:15px
`
const VideoContent = styled.div`
  flex: 5;
`
const VideoContentWrapper = styled.div`

`
const VideoName = styled.h1`
  font-size: 18px;
  margin-top: 20px;
  font-weight: 400;
  margin-bottom: 10px;
`
const VideoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`
const VideoInfo = styled.span`
  color: ${({ theme }) => theme.SoftText};
`
const VideoButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  font-size: 13px;
  cursor: pointer;
`
const VideoActionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 6px
`
const Recommendations = styled.div`
  flex: 2;
`
const HorizontalLine = styled.hr`
    border: solid  0 ;
    background-color:${({ theme }) => theme.Lines};
    height: 0.5px;
    margin: 14.75px 0px;
`;

const VideoChannel = styled.div`
  display:flex;
  justify-content: space-between;
`
const VideoChannelInfo = styled.div`
  display: flex;
  gap: 15px;
  
`
const SubscribeButton = styled.button`
  color: white;
  font-size: 14px;
  background-color: #CC0000;
  border: none;
  height: max-content;
  cursor: pointer;
  border-radius: 2px;
  font-weight: 500; 
  padding: 10px 16px;
  
`
const AccountDetails = styled.div`

`
const AccountImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`
const AccountNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap:2px;
  margin-top: 5px;
`
const AccountName = styled.h1`
  font-size: 15px;
  cursor: pointer;
  font-weight: 500
`

const AccountInfo = styled.span`
  color: ${({ theme }) => theme.SoftText};
  font-size: 12.5px;
`
const VideoDiscription = styled.p`
  margin-top: 20px;
  font-size: 14px;
`
export default function Video() {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2]
  const [channel, setChannel] = useState({});
  

  useEffect(() => {
    const fetchingData = async () => {
      dispatch(fetchingStart())
      try {
        const videoResponse = await axios.get(`/videos/find/${path}`);
        const channelResponse = await axios.get(`/users/find/${videoResponse.data.userId}`);
        
        setChannel(channelResponse.data)
        
        dispatch(fetchingSuccess(videoResponse.data))
      } catch (error) {
        dispatch(fetchingFailure())
      }
    }
    fetchingData()
  }, [path, dispatch]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <Container>
      <VideoContent>
        <VideoContentWrapper>
          <iframe width="100%" height="450px" src="https://www.youtube.com/embed/a8ICi5_buJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoContentWrapper>
        <VideoName>{currentVideo.title}</VideoName>
        <VideoDetails>
          <VideoInfo>{currentVideo.views} views • {moment(currentVideo.createdAt).fromNow()}</VideoInfo>
          <VideoButtons>
            <VideoActionButton>
              <ThumbUpOutlinedIcon />
              {currentVideo.likes?.length}
            </VideoActionButton>
            <VideoActionButton>
              <ThumbDownOutlinedIcon />
              DISLIKE
            </VideoActionButton>
            <VideoActionButton>
              <ReplyOutlinedIcon />
              SHARE
            </VideoActionButton>
            <VideoActionButton>
              <ContentCutOutlinedIcon />
              CLIP
            </VideoActionButton>
            <VideoActionButton>
              <PlaylistAddOutlinedIcon />
              SAVE
            </VideoActionButton>
            <VideoActionButton>
              <MoreHorizOutlinedIcon />
            </VideoActionButton>
          </VideoButtons>
        </VideoDetails>
        <HorizontalLine />
        <VideoChannel>
          <VideoChannelInfo>
            <AccountImage src={channel.img} />
            <AccountDetails>
              <AccountNameWrapper>
                <AccountName>{channel.name}</AccountName>

                <CheckCircleIcon style={{ color: '#626163', fontSize: '14px' }} />

              </AccountNameWrapper>
              <AccountInfo>{channel.subscribers} subscribers</AccountInfo>
              <VideoDiscription>{currentVideo.description}</VideoDiscription>
            </AccountDetails>
          </VideoChannelInfo>
          <SubscribeButton>SUBSCRIBE</SubscribeButton>
        </VideoChannel>
        <HorizontalLine />
        <Comments />
      </VideoContent>
        
    </Container>
  )
}
