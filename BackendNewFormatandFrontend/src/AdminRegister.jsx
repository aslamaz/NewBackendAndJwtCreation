import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const AdminRegister = () => {
    const [adminName,setAdminName] = useState('');
    const [adminEmail,setAdminEamil] = useState('')
    const [adminPassword,setAdminPassword] = useState('')
    const navigate = useNavigate();

    const registerAdmin = () =>{
        var data = {
            Aname:adminName,
            Aemail : adminEmail,
            Apassword : adminPassword
        }
        axios.post('http://localhost:5000/Admin',data).then((response)=>{
            console.log(response.data);
          navigate('/AdminLogin')
        })
    }
    return (
        <div className='Adminbody'>
            <div className="container">
                <div className="form-container">
                    <h2>Admin Registration</h2>
                  
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required onChange={(event) =>setAdminName(event.target.value)}/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required onChange={(event) =>setAdminEamil(event.target.value)}/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required onChange={(event) =>setAdminPassword(event.target.value)}/>
                        </div>
                      
                        <button type="submit" className="register-btn" onClick={registerAdmin}>Register</button>
                        <div style={{marginTop:"6px",textAlign:"center"}}>
                     <Link to={'/AdminLogin'} style={{textDecoration:"none",}}>Login</Link>
                        </div>
                   
                </div>
            </div>
        </div>
    )
}

export default AdminRegister