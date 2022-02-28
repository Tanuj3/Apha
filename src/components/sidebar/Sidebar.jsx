import './sidebar.css'
import {FaRss} from "react-icons/fa";
import {FaVideo} from "react-icons/fa";
import {MdChat} from "react-icons/md";
import {MdGroups} from "react-icons/md";
import {MdBookmarks} from "react-icons/md";
import {HiQuestionMarkCircle} from "react-icons/hi";
import {MdOutlineWork} from "react-icons/md";
import {MdEvent} from "react-icons/md";
import {MdOutlineSchool} from "react-icons/md";
import  {Users} from "../../dummyData"
import CloseFriend from '../closeFriend/CloseFriend';
import {GiWallet} from "react-icons/gi";


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <FaRss className='sidebarIcon' size="1.5em" color="Orange"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>

                    <li className="sidebarListItem">
                    <MdChat className='sidebarIcon' size="1.5em" color="Green"/>
                    <span className="sidebarListItemText">Chat</span>
                    </li>

                    <li className="sidebarListItem">
                    <FaVideo className='sidebarIcon' size="1.5em" color="Blue"/>
                    <span className="sidebarListItemText">Videos</span>
                    </li>

                    <li className="sidebarListItem">
                    <MdGroups className='sidebarIcon' size="1.5em" color="Purple"/>
                    <span className="sidebarListItemText">Group</span>
                    </li>

                    <li className="sidebarListItem">
                    <MdBookmarks className='sidebarIcon' size="1.5em" color="Pink"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                    </li>

                    <li className="sidebarListItem">
                    <HiQuestionMarkCircle className='sidebarIcon' size="1.5em" color="black"/>
                    <span className="sidebarListItemText">Questions</span>
                    </li>

                    <li className="sidebarListItem">
                    <MdOutlineWork className='sidebarIcon' size="1.5em" color="black"/>
                    <span className="sidebarListItemText">Jobs</span>

                    </li>
                    <li className="sidebarListItem">
                    <MdEvent className='sidebarIcon' size="1.5em" color="cornflowerblue"/>
                    <span className="sidebarListItemText">Events</span>
                    </li>

                    <li className="sidebarListItem">
                    <GiWallet className='sidebarIcon' size="1.5em" color="mediumseagreen   "/>
                    <span className="sidebarListItemText">Wallet</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className='sidebarHr'/>
                <ul className="sidebarFriendList">
                    {Users.map( u => (<CloseFriend key={u.id} user={u}/>))}   
                </ul>
            </div>
        </div>
    )
}
