import React,{useState,useEffect} from 'react'
import { auth } from './firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        const auth1=localStorage.getItem('userUid');
        if(auth1){
            navigate('/user')
        }
    });
    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential);
            localStorage.setItem('userUid', userCredential.user);
            navigate('/user')
        }).catch((err)=>{
            console.log(err)
            alert("enter correct email and password")
        })
    }
  return (
    <div>
        <form onSubmit={signIn}>
        <h1>login</h1>
        <input type='email' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type='password' placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type='submit'>login</button>
        </form>
    </div>
  )
}

export default Login;