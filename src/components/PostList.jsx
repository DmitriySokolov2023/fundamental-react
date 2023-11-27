import React from 'react';
import Posts from "./Posts";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
   if (!posts.length){
       return <h1 style={{textAlign:"center"}}>Посты не найдены</h1>
   }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup className="todo-list">
            {posts.map((post, index) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                <Posts remove={remove} post={post} number={index + 1}/>
                </CSSTransition>
            )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;