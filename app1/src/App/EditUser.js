import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../Database/DBService';

const EditUser = () => {
    const {id} = useParams()
    const {register, handleSubmit, setValue} = useForm()
    const [user, setUser] = useState({})

    useEffect(()=>{
        getUserFromDB()
    },[])

    const getUserFromDB=async()=>{
        let resp = await getUserById(id)
        setUser(resp.data)
    }
    const navigate = useNavigate()

    const updatedUser=(userUpdate)=>{
        updateUser(userUpdate)
        navigate('/display')
    }

    
    return (
        <>
        <div className='container'>
            <h1 className='text-primary'>USER UPDATE FORM</h1>
            <div className='row col-md-3'>
            <form onSubmit={handleSubmit(updatedUser)}>

            <div class="mb-3">
  <input type="hidden" class="form-control"  placeholder="USERNAME" {...register('id')}
  {...setValue('id', user.id)}/>
</div>

            <div class="mb-3">
  <input type="text" class="form-control"  placeholder="USERNAME" {...register('username')}
  {...setValue('username', user.username)}/>
</div>

<div class="mb-3">
  <input type="text" class="form-control" placeholder="PASSWORD" {...register('password')}
  {...setValue('password', user.password)}/>
</div>

<div class="mb-3 text-center">
  <input type="submit" class="btn btn-success" value="UPDATE"/>
</div>
            </form>
            </div>
           </div>
        </>
    );
};

export default EditUser;