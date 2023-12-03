import React from 'react';
import { Route, Routes} from "react-router-dom";
import {routes} from "../router/Routs";

const AppRouter = () => {
    console.log(routes)
    return (


        <Routes>
            {routes.map((route) =>
                <Route path={route.path} element={route.component} key={route.id}/>
            )}
        </Routes>

    );
};

export default AppRouter;