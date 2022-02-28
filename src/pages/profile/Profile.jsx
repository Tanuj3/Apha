import './profile.css'
import TopBar from "../../components/topbar/TopBar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Profile() {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={`${PF}post/3.jpeg`} alt="" className="profileCoverImg" />
                            <img src={`${PF}person/7.jpeg`} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Tanuj Rajput</h4>
                            <span className="profileInfoDesc">Hello My Friends</span>

                        </div>
                    </div>

                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>


                </div>

            </div>
        </>
    )
}
