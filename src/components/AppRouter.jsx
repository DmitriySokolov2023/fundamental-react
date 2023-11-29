import React from 'react';
import About from "../pages/About";
import Posts from "../pages/Posts";
import { Route, Routes} from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About/>}/>
            <Route exact path='/posts' element={<Posts/>}/>
            <Route exact path='/posts/:id' element={<PostIdPage/>}/>
            {/*<Route*/}
            {/*    path="*"*/}
            {/*    element={<Navigate to="/posts" replace />}*/}
            {/*/>*/}
        </Routes>
    );
};

export default AppRouter;