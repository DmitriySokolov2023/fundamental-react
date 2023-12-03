import React, {useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    const authProfile = (e) =>{
        e.preventDefault()
        console.log(data)
    }
    const [data, setData] = useState({login:'', pass:''})
    return (
        <div>
            <h1>Страница для логина</h1>
            <form>
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
                <MyButton
                    onClick={authProfile}
                >
                    Войти
                </MyButton>
            </form>
        </div>
    );
};

export default Login;