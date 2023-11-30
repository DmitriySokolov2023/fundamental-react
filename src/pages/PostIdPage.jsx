import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import MyLoader from "../components/UI/loader/MyLoader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async ()=>{
            const response = await PostService.getById(params.id)
            setPost(response.data)
    })
    console.log(post)
    useEffect(() => {
        fetchPostById(params.id)
    }, []);

    return (
        <div>
            <h1>Пост № {params.id}</h1>
            {isLoading
                ? <MyLoader/>
                : <div>{post.title} {post.body}</div>
            }

        </div>
    );
};

export default PostIdPage;