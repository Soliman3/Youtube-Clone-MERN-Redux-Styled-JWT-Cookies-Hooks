import React, { useEffect, useState } from 'react';
// import styled components library for styling our app...
import styled from 'styled-components';

// Imported material icons from mui5 library...
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

// import OtherImage from images folder...
import InteractiveAccountImages from '../images/InteractiveAcountImage.jpg';
import axios from 'axios';
import moment from 'moment';

// Styling...
const Container = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
`
const OtherAccountImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    
`
const OtherAccountDetails = styled.div`
    gap:20px;
`
const AccountNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
`
const OtherAccountName = styled.h1`
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;

`
const CommentTimeAgo = styled.span`
    font-size: 12px;
    font-weight:300;
`
const CommentText = styled.span`
    font-size: 14px;
    
`
const InteractionWithComment = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 13px;
    gap: 15px;
    
`
const OthersCommentButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 5px
`
const ActionButton = styled.div`
    display: flex;
    cursor: pointer;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    
`
const ReplayAction = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.SoftText};
    cursor: pointer;
`
export default function Comment({ comment }) {
    const [channel, setChannel] = useState({});

    useEffect(() => {
        const fetchingComment = async () => {
            try {
                const responseComment = await axios.get(`/users/find/${comment.userId}`)
                setChannel(responseComment.data)
            
            } catch (error) {
                
            }
        }
        fetchingComment();
    },[comment.userId])
    return (
        <Container>
            <OtherAccountImage src={channel.img} />
            <OtherAccountDetails>
                <AccountNameContainer>
                    <OtherAccountName>{channel.name}</OtherAccountName>
                    <CommentTimeAgo>{moment(comment.createdAt).fromNow()}</CommentTimeAgo>
                </AccountNameContainer>
                <CommentText>{comment.description} </CommentText>
                <InteractionWithComment>
                    <OthersCommentButtons>
                        <ActionButton>
                            <ThumbUpOutlinedIcon style={{fontSize: '16px'}}/>
                            1
                        </ActionButton>
                        <ActionButton>
                            <ThumbDownOutlinedIcon style={{fontSize: '16px'}}/>
                            1
                        </ActionButton>
                    </OthersCommentButtons>
                    <ReplayAction>REPLY</ReplayAction>
                </InteractionWithComment>
            </OtherAccountDetails>
        </Container>
    )
}
