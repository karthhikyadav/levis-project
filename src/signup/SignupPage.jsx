import React from 'react'
import './SignupPage.css'

const SignupPage = () => {
  return (
    <div className="container">

      <div className="card">

        <div className="login-form">SIGNUP</div>

        <div className="inputs">
          <div className="user">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div className="email">
            <label htmlFor="username">Email:</label>
            <input type="text" id="email" placeholder="enter Email" />
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

export default SignupPage
