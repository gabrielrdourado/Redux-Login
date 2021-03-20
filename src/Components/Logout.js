import React from 'react';
import './Logout.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

const Logout = () => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }

    return (
        <div className="user__interface">
            <div className="user__area">
                <h1>Bem vindo(a) <span className="user__name">{user.name}</span>!</h1>
                <button className="Logout__btn" onClick={(e) => handleLogout(e)}>Logout</button>
            </div>
        </div>
    )
}

export default Logout
