import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);
    const [errorLogin, seterrorLogin ] = useState(null);
    const navigate = useNavigate();

    const handleChangeUserName = (event) => {
        console.log(event);
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        console.log(event);
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        const payload = {
            email : email,
            password : password,
        };
        try {
            const response = await axios.post("https://reqres.in/api/login", payload);  
            setToken(response.token);
            localStorage.setItem("access_token", token);
            setTimeout(() => {
                navigate("/home");
            },500)
        } catch (error) {
            console.log(error.response.data.error);
            seterrorLogin(error.response.data.error);
        }
    }
    return(
        <section>
            {token && <h1> Login Berhasil </h1>}
            {errorLogin && <h1> {errorLogin} </h1>}
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
                <section>
                <h3>Login Page</h3>    
                  <label for="username">Username</label>    
                    <input  onChange={handleChangeUserName} placeholder="Masukan Email" />
                  <label for="password">Password</label>
                  <input onChange={handleChangePassword} placeholder="Masukan Password" />
                  <button onClick={handleLogin} >Login</button>
                  <a> <Link to={"register"}>doesn't Had an Account Yet ?</Link> </a>
                </section> 
        </section> 
    );
};

export default Login;