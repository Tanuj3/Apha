import Share from '../share/Share'
import Post from '../post/Post'
import './feed.css'
import { useEffect, useState } from 'react'
import axios from "axios"



export default function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        const fetchPosts = async () =>{
            const res = await axios.get("posts/timeline/620be7fe9a26d918af83025e");
           setPosts(res.data)
        }
       fetchPosts();
        
    }, [])

    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {posts.map((p)=> (
                    <Post key={p.id} post={p}/>
                ))}
            </div>

        </div>
    )
}
