import { useState } from "react";
import { addUser } from "../services/api";
import { useNavigate } from "react-router-dom";


const Adduser = () =>{

    const [user, setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:''
    })
    const navigate = useNavigate();

    const onValueChange = (e) => {
        // console.log(e.target.name,e.target.value);
        setUser({...user, [e.target.name]:e.target.value})
        
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <div className="container">
            <h2>Add New User</h2>
            
                <div className="form-group">
                <label >Name</label>
                <input type="text" onChange={(e) => onValueChange(e)} className="form-control" placeholder="Enter name" name="name" />
                </div>
                <div className="form-group">
                <label >Username:</label>
                <input type="text" onChange={(e) => onValueChange(e)} className="form-control" placeholder="Enter Username" name="username" />
                </div> 
                <div className="form-group">
                <label>Email:</label>
                <input type="email" onChange={(e) => onValueChange(e)} className="form-control"  placeholder="Enter email" name="email" />
                </div>  
                <div className="form-group">
                <label>Phone:</label>
                <input type="phone" onChange={(e) => onValueChange(e)} className="form-control" placeholder="Enter phone" name="phone" />
                </div>                                
                <button type="submit" onClick={() => addUserDetails()} className="btn btn-primary btn-lg btn-block">Submit</button>
            
        </div>
    )
}

export default Adduser;