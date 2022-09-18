import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { deleteUserById, fetchDataInDisplay } from '../Database/DBService';
import swal from 'sweetalert';

const Display = () => {
    const [users, setUser] = useState([])
    const [flag, setFlag] = useState(true)

    useEffect(()=>{
        getDataFromDB()
    },[flag])

    const getDataFromDB=async()=>{
        let resp = await fetchDataInDisplay()
        setUser(resp.data)
    }

    const deleteUser=(userId)=>{
        deleteUserById(userId)
        if(flag){
            setFlag(!flag)
        }
        else{
            setFlag(!flag)
        }
        swal("DELETED SUCCESSFULLY!");
    }
    return (
        <>
            <div className='container'>
            <h1 className='text-danger'>USER DATA</h1>
            <table className='table table-light'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(u=>{
                        return(
                            <>
                                <tr>
                                    <td>{u.id}</td>
                                    <td>{u.username}</td>
                                    <td>{u.password}</td>
                                    <td>
                                        <NavLink to={`/editUser/${u.id}`}>
                                        <i class="bi bi-bag-heart-fill text-primary"></i>
                                        </NavLink>
                                    </td>
                                    <td><i class="bi bi-backspace-fill text-danger"
                                    onClick={()=>deleteUser(u.id)}></i></td>
                                </tr>
                            </>
                        )
                    })
                }
            </tbody>
            </table>
            </div>
        </>
    );
};

export default Display;