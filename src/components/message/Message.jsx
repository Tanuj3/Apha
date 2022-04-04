import './message.css'
import {format} from "timeago.js"


export default function Message({message,own,currentUser}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own?"message own":"message"}>

        <div className="messageTop">
            <img className='messageImg' src={own?currentUser.profilePicture? currentUser.profilePicture: PF+"person/noAvatar.png":PF+"person/noAvatar.png"} alt="" />
            <p className='messageText'>{message.text}</p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
