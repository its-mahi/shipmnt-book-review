import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import api from '../../api.js';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/auth/register', { username, password });
            localStorage.setItem('token', data.token);
            navigate('/');
        } catch (error) {
            console.error('Error registering', error);
        }
    };

    return (
        <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Username</label>
            <input
                className='border-[1px]'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>
            <div>
            <label>Password</label>
            <input
                className='border-[1px]'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
    );
};

export default Register;
