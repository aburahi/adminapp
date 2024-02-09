import { db } from './firebaseconfig';
import { useState,useEffect } from 'react'
import { collection } from 'firebase/firestore';
import { addDoc, deleteDoc, getDocs, updateDoc,doc,query,where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const Adduser=()=>{
    const [name,setName]=useState("");
    const [date,setDate]=useState();
    const [useradmin,setUseradmin]=useState();
    //const auth=localStorage.getItem('user');
    const usersCollectionRef1=collection(db,"useradmin");
    const navigate=useNavigate();
    const signout=()=>{
      localStorage.clear();
      navigate('/')
    }
    const createUser= async()=>{
        await addDoc(usersCollectionRef1,{name:name,date:date,status:"active"})
      }
      const deleteUser=async (id,age)=>{
        const userDoc=doc(db,"useradmin",id);
        
        await deleteDoc(userDoc)
      }
      const updateuser=async(id,status)=>{
        console.log(status);
        const userDoc=doc(db,"useradmin",id);
        await updateDoc(userDoc,{status:"inactive"})
      }
      useEffect(()=>{
        const getUsers=async()=>{
          const data =await getDocs(query(usersCollectionRef1, where('status', '==', "active")));
          setUseradmin(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        }
        getUsers();
      })
    return(
        <div>
            <input placeholder="Enter the Name" onChange={(event)=>{setName(event.target.value);console.log(name);}}></input>
            <input type="date" id="start" name="trip-start" onChange={(event)=>{const date=event.target.value;setDate(date);console.log(date)}}/>
            <button onClick={createUser}>submit</button>
            <div className='allusers'>
            <button className='button2' onClick={signout}>signout</button>
            <div>

            </div>
      {useradmin?.map((user)=>{
        return(
        <div className='myuserdata'>
          <ul>
          <li><p> Name:{user.name}</p></li>
          <li><p> Date:{user.date}</p></li>
          <li><p> Status: {user.status}</p></li>
          <li><button onClick={()=>updateuser(user.id,user.status)} className='buttons'>inactive</button></li>
          <li><button onClick={()=>deleteUser(user.id)} className='buttons'>Delete User</button></li>
          </ul>
        </div>)
      })}
      </div>
        </div>
    )
}
export default Adduser;