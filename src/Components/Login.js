import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import './Login.css';

const Login = () => {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name: name,
            password: password,
            loggedIn: true,
        })
        );
    };

    return (
        <div className="Login">
            <form className="Login__Form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login</h1>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setname(e.target.value)}/>
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setpassword(e.target.value)}/>
                <button type="submit" className="Login__btn">Logar</button>
            </form>
        </div>
    )
}

export default Login
