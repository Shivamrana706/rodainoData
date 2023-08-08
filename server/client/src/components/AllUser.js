import { getUsers, deleteUser } from '../services/api.js';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';






const AllUser = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUser();
    }, []);
    const getAllUser = async () => {
        let allUser = await getUsers();
        setUsers(allUser.data);
        // console.log("Aludser",allUser);
        // console.log("usrs",users);       

    }


    const deleteUserDetail = async (id) => {
        await deleteUser(id);
        getAllUser();

    }

    return (


        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th score="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({ _id, name, username, email, phone }) => (
                        <tr key={_id}>
                            <td>{_id}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>
                                <button style={{ marginRight: "5px" }} className="btn btn-info" component={Link} to="/add" onClick={() => navigate(`/edit/${_id}`)}>Edit</button>

                                <button className="btn btn-danger" onClick={() => deleteUserDetail(_id)}>Delete</button>
                            </td>

                        </tr>
                    ))

                }

            </tbody>

        </table>

    )
}


export default AllUser