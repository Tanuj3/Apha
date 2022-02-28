import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RoomIcon from '@mui/icons-material/Room';

export default function Share() {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;    
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={PF+"person/1.jpeg"} alt="" className="shareProfileImg" />
                <input type="text" placeholder="What's in your mind Tanuj" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor= "blue" className='shareIcon'/>
                        <span className='shareOptionText'>Photo Or Video</span>
                    </div>

                    <div className="shareOption">
                        <LabelIcon  htmlColor= "tomato"className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>

                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor= "goldenrod"  className='shareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>

                    <div className="shareOption">
                        <RoomIcon htmlColor= "green" className='shareIcon'/>
                        <span className='shareOptionText'>Locations</span>
                    </div>

                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
