import React, {useState} from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";


function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const res = await API.post('/login', {email, password}, {withCredentials: true});
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('role', res.data.role);
            navigate('/');
        }
        catch(err){
            alert('Login Failed');
        }
    };

    return(
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-2" placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-2" placeholder="Password" />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    );

}

export default Login;