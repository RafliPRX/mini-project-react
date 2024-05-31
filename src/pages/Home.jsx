import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import '../list.css';
import '../Navbar.css'
import Navbar from "../component/Navbar";


const Home = () => {
    const [users, setUsers] = useState([]);
    const [pagination, setPagination] = useState({
        currentPage: 1,
    })

    const getMenus = async () => {
        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${pagination.currentPage}`);

            // console.log(response.data.data);
            setUsers(response.data.data);
            setPagination(pagination);
        } catch (error) {
            console.log(error.response);
        }
    }
    useEffect(() => {
        getMenus();
    }, []);

    useEffect(() => {
        getMenus();
    }, [pagination?.currentPage]);

    const handleNext = () => {
        // console.log("test");
        setPagination({
          ...pagination,
          currentPage: pagination?.currentPage + 1,
        });
      };
    const handlePrev = () => {
        // console.log("test");
        setPagination({
          ...pagination,
          currentPage: pagination?.currentPage - 1,
        });
      };  
    // console.log(users);
    return (
        <div>
            {users.map((user) => (
        <div className="content" >
            <Navbar/>
            <ul className="team" >
                <Link to={`/home/${user.id}`} >
                <li className="member co-funder" >
                <div class="thumb">
                    <img src={user.avatar}></img>
                </div>
                    <div class="description">
                    <h3 class="nama">{user.first_name} {user.last_name} </h3>
                    <p> {user.email} </p>
                    </div>
                </li>
                </Link>
            </ul>
            
        </div>
        ))}
            <div className="flex" >
                        <button className="prev" onClick={handlePrev} >Prev</button>
                        <button className="next" onClick={handleNext} >Next</button>
            </div>
        </div>
    )
}

export default Home