/** @jsxImportSource theme-ui */
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getPost } from '../../database/functions'

export default function BlogPost () {
    const {post} = useParams()
    const [postData, setPostData] = useState([]);
    const [paragraphs, setParagraphs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        getPost('blog_posts', post).then((data)=>{
            setPostData(data)
            setParagraphs(data[0].content.split('/'));
            setLoading(false)
        })
        // eslint-disable-next-line
    }, [])
    if (loading === false) {
        return (
            <div className="blog-post main">
                <h1 sx={{color: 'primary'}}>{postData[0].heading}</h1>
                <p sx={{color: 'grey'}}>{postData[0].created_at}</p>
                {paragraphs.map((para)=>{
                    return (
                        <p className="paragraph" sx={{color: 'iconInverseColor'}} key={para}>{para}</p>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className="blog-post main">
                <div className="loading">
                    <h1 sx={{color: 'primary'}}>Loading...</h1>
                    <p sx={{color: 'text'}}>This could take a while</p>
                </div>
            </div>
        )
    }
}