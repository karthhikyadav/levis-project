import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className="container">

      <div className="card">

        <div className="login-form">Login</div>

        <div className="inputs">
          <div className="user">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Username" />
          </div>

          <div className="pass">
            <label>Password:</label>
            <input type="password" placeholder="Password" />
          </div>

          <button className="btn">Login</button>
        </div>

      </div>

    </div>
  )
}

export default LoginPage
