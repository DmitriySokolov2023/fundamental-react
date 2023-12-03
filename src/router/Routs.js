import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import React from "react";



export const routes = [
    {id:1, path:'/about', component:<About/>, exact:true},
    {id:2, path:'/posts', component:<Posts/>, exact:true},
    {id:3, path:'/posts/:id', component:<PostIdPage/>, exact:true},
]
