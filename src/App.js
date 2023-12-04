import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import React, {useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, []);
    return (
        <AuthContext.Provider value={{
                isAuth,
                setIsAuth
            }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
