import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Display Name</label>
            <input type="text" className= "registerInput" placeholder="Enter your display name..."/>
            <label>Email</label>
            <input type="text" className= "registerInput" placeholder="Enter your email..."/>
            <label>Password</label>
            <input type="password" className= "registerInput" placeholder="Enter your password..."/>
            <button className="registerRegisterButton">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">Login</Link>
        </button>
    </div>
  )
}
