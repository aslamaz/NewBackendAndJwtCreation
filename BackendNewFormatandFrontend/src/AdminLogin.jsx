import axios from 'axios'
import React, { useState } from 'react'

const AdminLogin = () => {
    const [LogEmail, setLogEmail] = useState('')
    const [LogPassword, setLogPassword] = useState('')
  
    const loggedAdmin = () => {
      var data = {
        Adminemail: LogEmail,
        Adminpassword: LogPassword
      }
      axios.post('http://localhost:5000/Login', data).then((response) => {
       console.log(response.data);
      })
    }
  return (
    <div className='Adminbody'>
      <div class="loginpagecss">
        <h2>Login</h2>
        <form>
          <div class="input-group">
            <input type="email" id="useremail" required onChange={(event) => setLogEmail(event.target.value)} />
            <label for="username">UserEmail</label>
          </div>
          <div class="input-group">
            <input type="password" id="logpassword" required onChange={(event) => setLogPassword(event.target.value)} />
            <label for="password">Password</label>
          </div>
          <button type="submit" onClick={loggedAdmin}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin












