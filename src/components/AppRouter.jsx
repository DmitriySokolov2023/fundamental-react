import React, {useContext} from 'react';
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/Routs";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    const postOpen = useParams()
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