import React, { useState } from 'react'

 const UseStateHookComp = () => {
    const [count,setCount]=useState(0);//[currentstate,function to update state]
    const [myName,setMyname]=useState("Gunjan");
    const[fruits,setFruits]=useState(["Apple","Grapes","banana"])

    const increamentCount=()=>{
        setCount(count+1);
    }
    const setMyName=()=>{
        setMyname("Gunjan patange")
    }

    return (
        <div>
            <h2>This is use state Hook component</h2>
            <p>Count value is<strong>{count}</strong></p>
            <p>My name is:<strong>{myName}</strong></p>
            {/* <button typle='button' onClick={increamentCount}> counter++</button> */}
            <button type='button' onClick={()=>setCount(count+1)}>counter++</button>
            <button type='button' onClick={()=>setMyname("Pratik")}>change name</button>
            <ul>
                {fruits.map((val,index)=>{
                    return <li key={index}>{val}</li>
                })}
            </ul>
        </div>
    )
}
export default UseStateHookComp
