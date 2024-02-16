// import React from 'react';
import { Link } from "react-router-dom";
import image from '../assets/undraw_Hello_re_3evm.png'
const Home = () => {
  return (
    <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
    <img src={image} alt="" style={{width:'700px',height:'420px',border:'4px solid rgba(93, 0, 255, 0.557)',borderRadius:'5px'}}/><br></br>
        <h1>Login Success Page</h1>
        <Link to='/login' className="btn btn-light my-5" style={{fontSize:'22px'}}>Logout</Link>
    </div>
  )
}

export default Home