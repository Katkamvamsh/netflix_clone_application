
import "./Login.css"
import logo from '../../assets/logo.png'
import { useState } from "react"
import { login,signUp } from "../../Firebase"
import netflix_loading from '../../assets/netflix_spinner.gif'
const Login = () => {
  const[signState,setSignState]=useState("sign up")
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[loading,setLoading]=useState(false)
  const handleSwitchToSignIn=()=>{
    setSignState("sign up")
  }
  
  const auth_login = async (event) => {
        event.preventDefault();
        setLoading(true)
        if (signState === "sign in") {
      await login(email, password);
     
    } else {
    await signUp(name, email, password);
       }
    setLoading(false)
  };
  const handleSwitchToSignUp=()=>{
    setSignState("sign in")
  }

  return ( 
    loading? <div className="spinner">
      <img  src={netflix_loading} alt="spinner" />
    </div>:
   <div className="login">
    <img src={logo} alt="" className='login-logo'/>
    <div className="login-form">
      <h1>{signState==="sign up"?"Sign Up":"Sign In"} </h1>
      <form action="">
      {signState==="sign up"? (
  <>
    <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="YOUR NAME" />
    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="YOUR EMAIL" />
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="YOUR PASSWORD" />
  </>
) : (
  <>
    <input value={email} onChange={(e)=>{setEmail(e.target.value)}}   type="email" placeholder="YOUR EMAIL" />
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="YOUR PASSWORD" />
  </>
)}

         <button onClick={auth_login} type="submit">{signState==="sign up"?"Sign Up":"Sign In"} </button>
       <div className="form-help">
        <div className="remember">
          <input id="cbox" type="checkbox" />
          <label htmlFor="cbox">Remember me</label>
        </div>
          <p>need any help ?</p>
           </div>
        <div className="form-switch">
        {signState==="sign up"?
        <p>already have an account? <span onClick={handleSwitchToSignUp}> Sign In </span> </p>
        :
        <p>New to Netflix? <span onClick={handleSwitchToSignIn}> Sign Up </span> </p>
        }     
       </div>
        </form>
    </div>
   </div>
  )
}

export default Login
