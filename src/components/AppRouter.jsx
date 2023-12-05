import React, {useContext} from 'react';
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/Routs";
import {AuthContext} from "../context";
import MyLoader from "./UI/loader/MyLoader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    const postOpen = useParams()
    if(isLoading){
        return <MyLoader/>
    }
    return (

        isAuth
            ?
            <Routes>
                {privateRoutes.map((route) =>
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.id}
                        exact={route.exact}/>
                )}
                <Route path="*" element={<Navigate to="/posts" replace/>}></Route>
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) =>
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.id}
                        exact={route.exact}/>
                )}
                <Route path="*" element={<Navigate to="/login" replace/>}></Route>
            </Routes>


    );
};

export default AppRouter;