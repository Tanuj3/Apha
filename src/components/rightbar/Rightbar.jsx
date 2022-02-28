import './rightbar.css'
import { Users } from "../../dummyData"
import Online from '../online/Online'



export default function rightbar({ profile }) {

    const PF=process.env.REACT_APP_PUBLIC_FOLDER; 
    const Homerightbar = () => {

        return <>
            <div className="birthdayContainer">
                <img src="./assets/gift.png" className="birthdayImg" alt="" />
                <span className="birthdayText"><b>Piyush Sahu </b>and <b>3 other friends</b> have a birthday today </span>
            </div>
            <img src="./assets/cake.jpg" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            {Users.map((u) => (<Online key={u.id} user={u} />))}
        </>
    }

    const Profilerightbar = () => {
        return (<>
            <h4 className='rightbarTitle'>User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Mumbai</span>
                    
                </div>

                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Gondia</span>
                    
                </div>

                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>

            </div>

            <h4 className='rightbarTitle'>User Friends : </h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName"> Piyush Sahu</span>
                </div>

                <div className="rightbarFollowing">
                    <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName"> Piyush Sahu</span>
                </div>

                <div className="rightbarFollowing">
                    <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName"> Piyush Sahu</span>
                </div>


                <div className="rightbarFollowing">
                    <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName"> Piyush Sahu</span>
                </div>


                <div className="rightbarFollowing">
                    <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName"> Piyush Sahu</span>
                </div>


                <div className="rightbarFollowing">
                    <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName"> Piyush Sahu</span>
                </div>


                <div className="rightbarFollowing">
                    <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName"> Piyush Sahu</span>
                </div>
            </div>
        
        
        </>)
    }

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
               {profile?<Profilerightbar/>:<Homerightbar/>}
            </div>
        </div>
    )
}

