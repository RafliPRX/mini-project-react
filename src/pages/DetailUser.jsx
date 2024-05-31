import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../list.css'
import Navbar from "../component/Navbar";

function DetailUser() {
    const param = useParams();
    const [user, setUsers] = useState({});

    const getUser = async () => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${param?.id}`);
            setUsers(response.data.data);
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    console.log(user);

    return (
        <div>
            <div className="content">
                <Navbar/>
            <div className="title">
                <h1>Detail User</h1>
            </div>
            <ul className="team" key={user.id} >
                <li className="member co-funder">
                <div class="thumb">
                    <img src={user.avatar}></img>
                </div>
                <div className="description" >
                    <h3 className="nama" > {user.first_name} {user.last_name} </h3>
                    <p> {user.email} </p>
                </div>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default DetailUser