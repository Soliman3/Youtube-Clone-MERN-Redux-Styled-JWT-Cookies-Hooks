import React from 'react'
import styled from 'styled-components'

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Container = styled.div`
  display: flex;
  gap:24px
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
  color: ${({theme})=> theme.SoftText};
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

export default function Video() {
  return (
    <Container>
      <VideoContent>
        <VideoContentWrapper>
        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/a8ICi5_buJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoContentWrapper>
        <VideoName>My Husky WON’T Get Out Of Bed Until He Gets This!</VideoName>
        <VideoDetails> 
          <VideoInfo>67,127 views • Jul 27, 2022</VideoInfo>
          <VideoButtons>
            <VideoActionButton>
              <ThumbUpOutlinedIcon/>
              5.8 K
            </VideoActionButton>
            <VideoActionButton>
              <ThumbDownOutlinedIcon/>
              DISLIKE
            </VideoActionButton>
            <VideoActionButton>
              <ReplyOutlinedIcon/>
              SHARE
            </VideoActionButton>
            <VideoActionButton>
              <ContentCutOutlinedIcon/>
              CLIP
            </VideoActionButton>
            <VideoActionButton>
              <PlaylistAddOutlinedIcon/>
              SAVE
            </VideoActionButton>
            <VideoActionButton>
              <MoreHorizOutlinedIcon/>
            </VideoActionButton>
          </VideoButtons>
        </VideoDetails>
        <HorizontalLine/>

      </VideoContent>
      <Recommendations>
        Recommendations component
      </Recommendations>
    </Container>
  )
}
