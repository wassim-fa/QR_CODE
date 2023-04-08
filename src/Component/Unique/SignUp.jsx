import React,{useState} from 'react';
import './SignUp.css'
import { Link } from "react-router-dom";
import axios from 'axios';

function SignUp() {

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPWd, setRegisterPwd] = useState("")
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")

    const register = (e) => {
        e.preventDefault();
        const body = {
            username: `${nom} ${prenom}`,
            email: registerEmail,
            password: registerPWd
        }

        const endpoint = `http://127.0.0.1:1337/api/auth/local/register`;

        axios.post(endpoint, body)
            .then(response => {
                const token = response.data.jwt
                window.localStorage.setItem('token', token);
                window.localStorage.setItem('userId', response.data.user.id);
                window.location.replace('http://127.0.0.1:3000/upload')
            })
            .catch(error => {
            });
    }


    return <section>
        <div className='LoginBlock'>
            <h1>Join Us</h1>
            <p className='subtitle'>We're looking for amazing engineers just like you! Become a
                part of our rockstar community and skyrocket your career!</p>
            <form>
                <div className="identite">
                    <label for="nom">Nom</label>
                    <input id='nom' type="text" onChange={(e) => setNom(e.target.value)}></input>
                    <label for="prenom">Prenom</label>
                    <input id='prenom' type="text" onChange={(e) => setPrenom(e.target.value)}></input>
                </div>

                <label for="mail">Email address</label>
                <input id='mail' type="email" onChange={(e) => setRegisterEmail(e.target.value)}></input>
                <label for="password">Password</label>         
                <input id='password' type="password" onChange={(e) => setRegisterPwd(e.target.value)}></input>
                <button onClick={(e) => register(e)}>S'inscrire</button>
                <p className='info'>Already a user? <Link to='/Login'>Login</Link></p>
            </form>
        </div>
    </section>
}
export default SignUp   