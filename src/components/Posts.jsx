import React from 'react';
import '../styles/App.css'
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom'
const Posts = ({post, remove}) => {
    const router = useNavigate()

    return (
        <div>
            <div className={'post'}>
                <div className={'post__content'}>
                    <strong>{post.id}. {post.title}</strong>
                    <div>{post.body}</div>
                </div>
                <div className={'post__btn'}>
                    <MyButton onClick={()=> router(`/posts/${post.id}/`)}>
                        Открыть
                    </MyButton>
                    <MyButton onClick={()=> remove(post)}>
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default Posts;