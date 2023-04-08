import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import axios from 'axios';


function Login() {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPwd, setLoginPwd] = useState("")

    const login = (e) => {
        e.preventDefault();

        axios
            .post(`http://127.0.0.1:1337/api/auth/local`, {
                identifier: loginEmail,
                password: loginPwd,
            })
            .then(response => {
                // Handle success.
                window.localStorage.setItem('token', response.data.jwt);
                window.localStorage.setItem('userId', response.data.user.id);
                window.location.replace('http://127.0.0.1:3000/upload')
            })
            .catch(error => {
                alert('mauvais identifiants ou mdp')
            });
    }

    return <section>
        <div className='LoginBlock'>
            <h1> Log in your Account</h1>
            <p className='subtitle'>To have access to all your documents</p>
            <form>
                <label for="mail">Email address</label>
                <input id='mail' type="email" onChange={(e) => setLoginEmail(e.target.value)}></input>
                <label for="password">Password</label>
                <input id='password' type="password" onChange={(e) => setLoginPwd(e.target.value)}></input>
                <button onClick={(e) => login(e)}>Se connecter</button>
                <p className='info'>A new user ? <Link to='/SignUp'>Sign up</Link></p>
            </form>
        </div>
    </section>
}
export default Login