import React, { useEffect, useState } from 'react';
// import styled components library for styling our app...
import styled from 'styled-components';

// import ChannelImage from images folder...
import ChannelImage from '../images/AccountImage.jpg';

// import Comment component...
import Comment from './Comment';

// Imported material icons from mui5 library...
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { updateCurrentUser } from 'firebase/auth';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Container = styled.div`

`
const NewComment = styled.div`
    display:flex;
    
    gap: 20px;
    margin-bottom: 25px;
`
const AccountImage = styled.img`
    width: 43px;
    height: 43px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    
`
const CommentInput = styled.input`
    border: none;
    border-bottom: solid 1px ${({ theme }) => theme.Lines};
    background-color: transparent;
    width: 100%;
    outline: none;
    margin-bottom: 10px;
`
const ActiveCommentInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Wrapper = styled.div`
    disply:flex;
    flex-direction: colum;
    width: 100%;
    margin-top: 15px;
`
const ActiveCommentActions = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const CommentCancel = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.SoftText};
    font-size: 14px;
    font-weight: 500;
    padding: 10px 16px;
    cursor: pointer;
`
const CommentCreate = styled.button`
    border: none;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 16px;
    border-radius: 2px;
    cursor: pointer;
`
export default function Comments({videoId}) {
    const [isClicked, setIsClicked] = useState(false);
    const [value, setValue] = useState("");
    function handleOnClick() {
        setIsClicked(false);
        setValue("");
    };

    const { currentUser } = useSelector((state) => state.user);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const fetchComments = async () => {
            
            try {
                const responseComments = await axios.get(`/comments/${videoId}`)
                setComments(responseComments.data)
            } catch (error) {
                
            }
        }
        fetchComments()
        
    }, [videoId])
    return (
        <Container>
            <NewComment>
                <AccountImage src={currentUser.img} />
                <Wrapper>

                    <CommentInput placeholder='Add a comment' onClick={() => setIsClicked(true)} value={value} onChange={e => setValue(e.target.value)} />
                    {isClicked ? <ActiveCommentInput>
                        <SentimentSatisfiedAltIcon />
                        <ActiveCommentActions>
                            <CommentCancel onClick={handleOnClick}>CANCEL</CommentCancel>
                            <CommentCreate style={{ backgroundColor: value !== "" ? '#065fd4' : '#eee', color: value !== "" ? 'white' : 'gray' }}>COMMENT</CommentCreate>
                        </ActiveCommentActions>
                    </ActiveCommentInput> : ''}

                </Wrapper>
            </NewComment>
            {comments.map((comment) => (
                <Comment comment={comment} key={comment._id} />
            ))}
            

        </Container>
    )
}
