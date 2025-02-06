import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const loggingin = async (e) =>{
    e.preventDefault()
    await axios.post("/api/login", { email, password})
    .then(function(response){
      navigate('/')
      setIsLoggedIn(true)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <div>
      <form onSubmit={loggingin}>
        <label htmlFor="">What should we call you?</label>
        <input type="text" name="username" value={username} onChange={handleChange}/>
        <label>Email</label>
        <input type="email" name="email" required value={email} onChange={handleChange}/>
        <label>Password</label>
        <input type="password" name="password" required value={password} onChange={handleChange}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login