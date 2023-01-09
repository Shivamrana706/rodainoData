import { useState,useEffect } from "react";
import { editUser,getUser} from "../services/api";
import { useNavigate,useParams } from "react-router-dom";


const EditUser = () =>{

    const [user, setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:''
    })
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=> {
        loadUserDetails();
    },[])

    const loadUserDetails = async () =>{
        const response = await getUser(id);
        setUser({
            name:response.data[0].name,
            username:response.data[0].username,
            email:response.data[0].email,
            phone:response.data[0].phone

        })
        // console.log("Edituser data", response.data[0]);
    }





    const onValueChange = (e) => {
        // console.log(e.target.name,e.target.value);
        setUser({...user, [e.target.name]:e.target.value})
        
    }

    const editUserDetails = async () => {
        await editUser(user,id);
        navigate('/all');
    }

    


    return (
        <div className="container">
            <h2>Update the User detail</h2>
            
                <div className="form-group">
                <label >Name</label>
                <input type="text" onChange={(e) => onValueChange(e)} className="form-control" value={user.name} name="name" />
                </div>
                <div className="form-group">
                <label >Username:</label>
                <input type="text" onChange={(e) => onValueChange(e)} className="form-control" value={user.username} name="username" />
                </div> 
                <div className="form-group">
                <label>Email:</label>
                <input type="email" onChange={(e) => onValueChange(e)} className="form-control"  value={user.email} name="email" />
                </div>  
                <div className="form-group">
                <label>Phone:</label>
                <input type="phone" onChange={(e) => onValueChange(e)} className="form-control" value={user.phone} name="phone" />
                </div>                                
                <button type="submit" onClick={() => editUserDetails()} className="btn btn-primary btn-lg btn-block">Submit</button>
            
        </div>
    )
}

export default EditUser;