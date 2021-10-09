/** @jsxImportSource theme-ui */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPosts } from '../../database/functions'

export default function BlogLandingPage() {
    const [posts, setPosts] = useState([{heading: '', summary: '', id: '', postLink: '',  created_at: ''}]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        getPosts('blog_posts').then((data)=>{
            setLoading(false)
            setPosts(data)
        })
    }, [])
    if (loading === false) {
        return (
            <div className="blog main">
                {posts.map((post)=>{
                    return (
                        <BlogPostComponent 
                            head={post.heading}
                            summary={post.summary}
                            key={post.id}
                            link={post.post_link}
                            date={post.created_at}
                        />
                    )
                })}
            </div>
        )
    } else {
        return (
           <div className="blog main">
                <div className="loading">
                    <h1 sx={{color: 'primary'}}>Loading...</h1>
                    <p sx={{color: 'text'}}>This could take a while</p>
                </div>
           </div>
        )
    }
}

function BlogPostComponent (props) {
    return (
        <div className="blog-post-component">
            <Link  to={`/blog/${props.link}`} className="React-Link">
                <h1 sx={{color: 'primary'}}>{props.head}</h1>
                <p id="date" sx={{color: 'text'}}>{props.date}</p>
                <p sx={{color: 'grey'}}>{props.summary}</p>
            </Link>
        </div>
    )
}