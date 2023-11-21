import React from 'react';
import Posts from "./Posts";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map((post, index) =>
                <Posts remove={remove} post={post} key={post.id} number={index + 1}/>
            )}
        </div>
    );
};

export default PostList;