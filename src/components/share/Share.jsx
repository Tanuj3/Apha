import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RoomIcon from '@mui/icons-material/Room';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios"
import { Cancel } from '@mui/icons-material';

export default function Share() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext)

    const [file, setFile] = useState(null)

    const desc = useRef()
    const submitHandler = async (e) => {

        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName)
            data.append("file", file)
            newPost.img = fileName
            try {
                await axios.post("/upload", data)
            }
            catch (err) {
                console.log(err)
            }

        }

        try {
            await axios.post("/posts", newPost)
            window.location.reload()
        }
        catch (err) {
            console.log("fdfs")
        }

    }

    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="shareProfileImg" />
                    <input type="text" placeholder={"What's in your mind " + user.username + "?"} className="shareInput" ref={desc} />
                </div>
                <hr className="shareHr" />
                {file &&
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                        <Cancel className='shareCancelImg' onClick={() => setFile(null)} />
                    </div>
                }
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMediaIcon htmlColor="blue" className='shareIcon' />
                            <span className='shareOptionText'>Photo Or Video</span>
                            <input style={{ display: "none" }} type="file" id="file" accept='.png,.jpeg,.jpg' onChange={(e) => {
                                setFile(e.target.files[0])
                            }} />
                        </label>

                        <div className="shareOption">
                            <LabelIcon htmlColor="tomato" className='shareIcon' />
                            <span className='shareOptionText'>Tag</span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor="goldenrod" className='shareIcon' />
                            <span className='shareOptionText'>Feelings</span>
                        </div>

                        <div className="shareOption">
                            <RoomIcon htmlColor="green" className='shareIcon' />
                            <span className='shareOptionText'>Locations</span>
                        </div>

                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}
