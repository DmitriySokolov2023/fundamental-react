import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = (e) =>{
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    const [data, setData] = useState({login:'', pass:''})
    return (
        <div>
            <h1>Страница для логина</h1>
            <form
                onSubmit={login}
            >
                <MyInput
                    value={data.login}
                    type="text"
                    placeholder='Введите логин'
                    onChange={e => setData({...data, login: e.target.value})}
                />
                <MyInput
                    value={data.pass}
                    type=""
                    placeholder='Введите пароль'
                    onChange={e => setData({...data, pass: e.target.value})}
                />
                <MyButton>
                    Войти
                </MyButton>
            </form>
        </div>
    );
};

export default Login;