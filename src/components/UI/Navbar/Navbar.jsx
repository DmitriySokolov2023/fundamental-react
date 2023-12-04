import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='App'>
            <div className='navbar'>
                <div className='navbar__content'>
                    <div className='navbar__items'>
                        <Link to="/about" className='navbar__item link'>О приложении</Link>
                        <Link to="/posts" className='navbar__item link'>Посты</Link>
                    </div>
                    <div>
                        <Link className='link' to="/login"
                              onClick={() => {
                                isAuth ? logout() : setIsAuth(true)
                              }}
                        >{isAuth ? 'Выйти' : 'Войти'}</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;