import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import MyLoader from "../components/UI/loader/MyLoader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async ()=>{
            const response = await PostService.getById(params.id)
            setPost(response.data)
    })
    const [fetchComments, isLoadingComments, errorComments] = useFetching(async ()=>{
        const response = await PostService.getComments(params.id)
        setComments(response.data)
    })

    console.log(comments)
    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, []);

    return (
        <div className="App">
            <h1>Пост № {params.id}</h1>
            {isLoading
                ? <MyLoader/>
                : <div>{post.title} {post.body}</div>
            }
            <h1>Комментарии</h1>
            {isLoadingComments
                ? <MyLoader/>
                :
                <div>
                    {comments.map((comment, index) =>
                        <div style={{marginBottom:20}} key={index}>
                            <p style={{fontWeight:700}}>Пользователь: {comment.email}</p>
                            <p>Комментарий: {comment.body}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;