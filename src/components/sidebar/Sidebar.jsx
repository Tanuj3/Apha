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
import RocketIcon from '@mui/icons-material/Rocket';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
export default function Sidebar() {


    const { user: currentUser, dispatch } = useContext(AuthContext);
    const handleSubmit = () => {
        localStorage.clear();
    }



    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">

                <li className="sidebarListItem">
                    <SentimentSatisfiedOutlinedIcon className='sidebarIcon' size="0.8em" color="green"/>
                    <span className="sidebarListItemText title">Welcome {currentUser.username} </span>
                    </li>

                    <li className="sidebarListItem">
                    <FaRss className='sidebarIcon' size="1.5em" color="Orange"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>

                    <li className="sidebarListItem">
                    <MdChat className='sidebarIcon' size="1.5em" color="Green"/>
                    <span className="sidebarListItemText">Chat</span>
                    </li>

                    <li className="sidebarListItem">
                    <MdOutlineSchool className='sidebarIcon' size="1.5em" color="green"/>
                    <span className="sidebarListItemText">Investors</span>
                    </li>

                    <li className="sidebarListItem">
                    <RocketIcon className='sidebarIcon' size="1.5em" color="Purple"/>
                    <span className="sidebarListItemText">Startups</span>
                    </li>

                    <li className="sidebarListItem">
                    <MdBookmarks className='sidebarIcon' size="1.5em" color="Pink"/>
                    <span className="sidebarListItemText">Sales</span>
                    </li>
                </ul>
                <hr className='sidebarHr'/>
                <ul className="sidebarFriendList">
                 <form onSubmit={handleSubmit}>  <button className='sidebarButton logout' type='submit'>Logout</button> </form> 
                </ul>
            </div>
        </div>
    )
}
