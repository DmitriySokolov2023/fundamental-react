import React from 'react';
import Posts from "./Posts";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map((post, index) =>
                <Posts post={post} key={post.id} number={index + 1}/>
            )}
        </div>
    );
};

export default PostList;