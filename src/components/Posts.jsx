import React from 'react';
import '../styles/App.css'
import MyButton from "./UI/button/MyButton";
const Posts = ({post, number, remove}) => {
    return (
        <div>
            <div className={'post'}>
                <div className={'post__content'}>
                    <strong>{number}. {post.title}</strong>
                    <div>{post.body}</div>
                </div>
                <div className={'post__btn'}>
                    <MyButton onClick={()=> remove(post)}>
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default Posts;