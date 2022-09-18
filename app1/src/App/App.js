import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Display from './Display';
import EditUser from './EditUser';
import User from './User';

const App = () => {
    return (
        <>
            
           

            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
        <NavLink className='nav-link' to='user'>USER</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className='nav-link' to='display'>DISPLAY</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

            <Routes>
                <Route path='/user' element={<User/>}></Route>
                <Route path='/display' element={<Display/>}></Route>
                <Route path='/editUser/:id' element={<EditUser/>}></Route>
            </Routes>
        </>
    );
};

export default App;