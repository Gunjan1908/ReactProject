import React, { useEffect, useState } from 'react'

const UseEffectHookComp = () => {
    const [count,setCount] = useState(0);
    const[sal,setSal] =useState(100000);
    //1.with no dependency(it will go in infinite loop)
    // useEffect(()=>{
    //     setCount(count+1)
    // })
    // 2. using dependency as blank array(it run only once)
    // useEffect(()=>{
    //     setCount(count+1)   

    // },[])
    const incrementSalary=()=>{
        setSal(sal+1000);
    }

    //3. execute useEffect when dependency value change
    useEffect(()=>{
           setCount(count+1)   
    
         },[sal]);

    return (
        <div>
            <h2>This is use effect hook component</h2>
            <p>counter value:<strong>{count}</strong></p>
            <p>My salary is<strong>{sal}</strong></p>
            <button type='button' onClick={incrementSalary}>increment salary</button>
        </div>
    )
}

export default UseEffectHookComp
