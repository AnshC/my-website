/** @jsxImportSource theme-ui */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPosts } from '../../database/functions'

export default function BlogLandingPage() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        getPosts('blog_posts').then((data)=>{
            setPosts(data)
        })
    }, [])
    return (
        <div className="blog main">
            {posts.map((post)=>{
                return (
                    <BlogPostComponent 
                        head={post.heading}
                        summary={post.summary}
                        key={post.id}
                        link={post.postLink}
                        date={post.created_at}
                    />
                )
            })}
        </div>
    )
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