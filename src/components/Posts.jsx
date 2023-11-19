import React from 'react';
import '../styles/App.css'
const Posts = ({post, number}) => {
    return (
        <div>
            <div className={'post'}>
                <div className={'post__content'}>
                    <strong>{number}. {post.title}</strong>
                    <div>{post.body}</div>
                </div>
                <div className={'post__btn'}>
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default Posts;