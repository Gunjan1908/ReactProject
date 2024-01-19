import React, { useRef } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import './external.css'
import axios from 'axios';

function LoginComp() {
    let uid=useRef();
    let upass= useRef();
     let udata=[];
    const getData= ()=>{
        // console.log(uid.current.value);
        // console.log(upass.current.value);
        let uId =uid.current.value;
        let uPass=upass.current.value;
        axios.get("http://localhost:8888/user").then((res)=>{
            //console.log(res.data)
            let udata=res.data;
            const validUser = udata.filter((val)=>{return val.userid===uId && val.userpass===uPass})
            if(validUser.length > 0){
                navigator("/dashboard");

            }
            else{

                window.alert("wrong credential");

            }


        }).catch((err)=>{})
    }
    return (
        <div>
            <h2>This is login component</h2>
            {/* <Button variant="text">Simple button</Button>{" "}
            <Button variant="outlined">Simple button</Button>{" "} */}
            
            <form className='loginform'>
                <input type='text' name='uid' ref={uid} placeholder='enter user id' className='form-control mb-2'/>
                <input type='text' name='upass'ref={upass} placeholder='enter user password' className='form-control mb-2 mt-2'/>


             <Button variant="contained" onClick={getData}>Login</Button>
            </form>
           
        </div>
    )
}

export default LoginComp
