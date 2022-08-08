import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

// import firebase upload files functions...
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// import icons from mui5 library...
import CloseIcon from '@mui/icons-material/Close';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import app from '../firebase';


const Container = styled.div`
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, 0.50);
    position: absolute;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width:910px;
    height:608px;
    background-color: white;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 20px 25px;
    gap:10px;
    position: relative;
    box-shadow: 0px 9px 36px -3px rgba(0,0,0,0.62);
    -webkit-box-shadow: 0px 9px 36px -3px rgba(0,0,0,0.62);
    -moz-box-shadow: 0px 9px 36px -3px rgba(0,0,0,0.62);;
`;
const ClosePopUp = styled.div`
    cursor:pointer;    
    position: absolute;
    top:25px;
    right:25px;
`;
const PopUpTitle = styled.h3`
    font-size: 20px;
    color: #212121;
    font-weight: 500;
`;

const HorizontalLine = styled.hr`
    border:solid  0 ;
    background-color:${({ theme }) => theme.Lines};
    height: 1px;
    margin-top: 10px;
    margin-left: -25px;
    margin-right: -25px;
    
    
`;

const UploadFileIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    flex-direction: column;
`

const WrapperIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    
   
    
`;

const Circle = styled.div`
    background-color: rgb(0 0 0 / 2%);;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.label`
background-color: #065fd4;
color: white;
border-radius: 2px;
padding: 10px 15px;
font-weight: 500;
font-size:14px;
border: none;
cursor: pointer;
align-items: left;
margin-top: 20px;
::-webkit-file-upload-button {
    visibility: hidden;
  }
`;
const SelectedFileText = styled.span`
    font-size: 14px;
    font-weight:400;
    margin-top: 20px;
`;

const SelectedFileDetails = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: gray;
    margin-top: 10px;
`;

const InputsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
border: 1px solid ${({ theme }) => theme.SoftColor};
background-color: transparent;
padding: 15px 0px 15px 10px;
margin: 10px 0;
border-radius: 6px;
outline-color: #5B8AC7;
font-size:16px;
width:100%;
&::placeholder{
    opacity: 0.70;
    font-weight: 400;
    font-color: black;
    font-size: 14px;
    
}
&:focus {
    outline: 3px solid hsla(220, 100%, 50%, 80%);
    box-shadow: 0px 0px 2px blue;
    &::placeholder{
        opacity: 0.5;
        font-color: gray;
    }
}
`;

const UploadFileImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    flex-direction: column;
`;

const UploadButton = styled.button`
background-color: #CC0000;
color: white;
border-radius: 2px;
padding: 10px 15px;
font-weight: 500;
font-size:14px;
border: none;
cursor: pointer;
align-items: left;
margin-top: 20px;
`;
const SubmitFiles = styled.div`
    bottom:25px;
    right: 25px;
    position: absolute;

`;

const VideoDetailsWrapper = styled.div``

const FooterText = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: gray;
    margin-top: 10px;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:17%;
`;
const FooterTextSecond = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: gray;
    margin-top: 10px;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:0;
`;

export default function Upload({ setOpen }) {

    const [isClicked, setIsClicked] = useState(false);
    const [video, setVideo] = useState(undefined);
    const [img, setImg] = useState(undefined);
    const [videoProgress, setVideoProgress] = useState(0);
    const [imgProgress, setImgProgress] = useState(0);
    const [inputs, setInputs] = useState({});
    const [tags, setTags] = useState([]);

    const handleChange = (e) => {
        setInputs((previous) => {
            return { ...previous, [e.target.name]: e.target.value };
        })
    }

    const handleTags = (e) => {
        setTags(e.target.value.split(','));
    }


    // Upload file to firebase storage function...
    const uploadFile =  (file, urlType) => {
        const storage = getStorage(app);
        const uniqueFileName = new Date().getTime() + file.name; // for unique file name to prevent conflic samiler file names...
        const storageRef = ref(storage, uniqueFileName);

        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on('state_changed',
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === 'imgUrl' ? setImgProgress(progress) : setVideoProgress(progress);
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {

            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs((previous) => {
                        return { ...previous, [urlType]: downloadURL };
                    });
                });
              }
        );
    }

    useEffect(() => { video && uploadFile(video , "videoUrl") }, [video])
    useEffect(() => { img && uploadFile(img, "imgUrl") }, [img])
    return (
        <Container>
            <Wrapper>
                <ClosePopUp onClick={() => setOpen(false)}><CloseIcon /></ClosePopUp>
                <PopUpTitle>Upload videos</PopUpTitle>
                <HorizontalLine />

                <UploadFileIcon>
                    <Circle>
                        <WrapperIcons>
                            <FileUploadIcon style={{ color: "rgb(0 0 0 / 40%)", fontSize: '60px' }} />
                        </WrapperIcons>
                    </Circle>
                    <SelectedFileText>Drag and drop video files to upload</SelectedFileText>
                    <SelectedFileDetails>Your videos will be private until you publish them.</SelectedFileDetails>
                    {videoProgress>0? ("Uploading Video:" + videoProgress + "%"):(<Button onClick={() => setIsClicked(true)}>SELECTED FILES
                        <input type="file" style={{ display: 'none' }} accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
                    </Button>)}
                </UploadFileIcon>
                {isClicked && <VideoDetailsWrapper>
                    <InputsContainer>
                        <Input type="text" placeholder="Video Title" onChange={handleChange} name="title"/>
                        <Input type="text" placeholder='Video Description' onChange={handleChange} name="description"/>
                        <Input type="text" placeholder='Separate tags with commas' onChange={handleTags} />
                    </InputsContainer>
                    {imgProgress>0? ("Uploading Image:"+ imgProgress + "%"):(<UploadFileImage>
                        <Button type="">
                            SELECT IMAGE
                            <input type="file" style={{ display: 'none' }} accept="image/*" onChange={(e) => setImg(e.target.files[0])} />
                        </Button>
                    </UploadFileImage>)}
                    <SubmitFiles>
                        <UploadButton>Upload All files</UploadButton>
                    </SubmitFiles>
                </VideoDetailsWrapper>}
                {!isClicked && <> <FooterText>
                    By submitting your videos to Soliman YouTube Clone, you acknowledge that you agree to <span style={{ color: 'blue', marginLeft: "5px" }}>Terms of Service</span> and <span style={{ color: 'blue', marginLeft: "5px" }}>Community Guidelines</span>.
                </FooterText>
                    <FooterTextSecond>
                        Please be sure not to violate others' copyright or privacy rights.<span style={{ color: 'blue', marginLeft: "5px" }}> Learn more</span>
                    </FooterTextSecond> </>}
            </Wrapper>
        </Container>
    )
}
