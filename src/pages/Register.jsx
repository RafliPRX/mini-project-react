import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState(null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const handleChangeUserName = (event) => {
        console.log(event);
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        console.log(event);
        setPassword(event.target.value);
    }
    const handleRegister = async () => {
        const payload = {
            email : email,
            password : password,
        };
        try {
            const response = await axios.post("https://reqres.in/api/register", payload);
            setToken(response.token);
            setId(response.id);
            setTimeout(() =>{
                navigate("/")
            },500)
        } catch (error) {
            console.log(response.error);
        }      
    }
    return (
        <div>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            {token && <h1> Register Berhasil </h1>}
            {/* {errorLogin && <h1> {errorLogin} </h1>} */}
            <section>
            <h3>Register</h3>
            <div>
                <label for="username">Username</label>
                <input onChange={handleChangeUserName} placeholder="Masukan Email" />
                <label for="username">Password</label>
                <input onChange={handleChangePassword} placeholder="Masukan Password" />
            </div>
            <button onClick={handleRegister} >Register</button>
            <a><Link to={"/"} >Allready have an Account ?</Link></a>
            </section>
        </div>
    )
}

export default Register