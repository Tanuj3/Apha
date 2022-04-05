import './sidebar.css'
import RocketIcon from '@mui/icons-material/Rocket';
import { AuthContext } from '../../context/AuthContext';
import BadgeIcon from '@mui/icons-material/Badge';
import FeedIcon from '@mui/icons-material/Feed';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { useContext } from 'react';
import { red,blue,green } from '@mui/material/colors';
export default function Sidebar() {


    const { user: currentUser, dispatch } = useContext(AuthContext);
    const handleSubmit = () => {
        localStorage.clear();
    }



    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">

                {/* <li className="sidebarListItem">
                    <SentimentSatisfiedOutlinedIcon className='sidebarIcon' size="0.8em" color="green"/>
                    <span className="sidebarListItemText title">Welcome {currentUser.username.toUpperCase()} </span>
                    </li>
                    <hr className='sidebarHr'/> */}
                    <li className="sidebarListItem">
                    <FeedIcon className='sidebarIcon' size="1.5em" color="primary"/>
                    <span className="sidebarListItemText">News Feed</span>
                    </li>

                    <li className="sidebarListItem">
                    <BadgeIcon className='sidebarIcon' size="1.5em" sx={{ color: red[400] }}/>
                    <span className="sidebarListItemText">C Level Executives</span>
                    </li>

                    <li className="sidebarListItem">
                    <CurrencyExchangeOutlinedIcon className='sidebarIcon' size="1.5em" sx={{ color: green[800] }}/>
                    <span className="sidebarListItemText">Investors</span>
                    </li>

                    <li className="sidebarListItem">
                    <RocketIcon className='sidebarIcon' size="1.5em" sx={{ color: blue[300] }}/>
                    <span className="sidebarListItemText">Startups</span>
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
