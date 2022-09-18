import React from 'react';
import {useForm} from 'react-hook-form'
import { saveDataInDB } from '../Database/DBService';

const User = () => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    const saveDataInConsole=(userObj)=>{
        // console.log(userObj)
        saveDataInDB(userObj)
        reset()
    }

    return (
        <>
           <div className='container'>
            <h1 className='text-primary'>USER REGISTRATION FORM</h1>
            <div className='row col-md-3'>
            <form onSubmit={handleSubmit(saveDataInConsole)}>
            <div class="mb-3">
  <input type="text" class="form-control"  placeholder="USERNAME" {...register('username',
  {
    required:'Fields cannot be Empty!!!',
    minLength:{
        value:5,
        message:'Min 5 Characters required'
    },
    pattern:{
        value:/^[a-z0-9_\.]+$/,
        message:'INVALID USERNAME'
    }
  })}/>
</div>
<h6 className='error'>{errors.username?.message}</h6>

<div class="mb-3">
  <input type="password" class="form-control" placeholder="PASSWORD" {...register('password',
  {
    required:'Fields cannot be Empty!!!',
    pattern:{
        value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
        message:'INVALID PASSWORD'
    }
  })}/>
</div>
<h6 className='error'>{errors.password?.message}</h6>

<div class="mb-3 text-center">
  <input type="submit" class="btn btn-info" value="REGISTER"/>
</div>
            </form>
            </div>
           </div>
        </>
    );
};

export default User;