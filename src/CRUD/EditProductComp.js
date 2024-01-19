import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//use params allows to access data
import { useParams } from 'react-router-dom'

export const EditProductComp = () => {
    const nav = useNavigate();
    const{id} =useParams();
    const[item,setItem]=useState({
        id:"",
        name:"",
        price:"",
        company:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:5050/product/${id}`).then((res)=>{
           // console.log(res.data);
            setItem(res.data)
             }).catch((err)=>{})
    },[])

   
    const addProduct =(event)=>{
        event.preventDefault();
        console.log(item);
        axios.put(`http://localhost:5050/product/${id}`,item).then(()=>{
            window.alert("product updated successfully");
            nav("/dashboard");
        }).catch((err)=>{})

    }
    const inputChangeHandler= (event)=>{
        const{type,name,value} = event.target;
        setItem({...item,[name]: value});

    }
    return (
        <div>
            <h2>This is Edit product component</h2>
            <form onSubmit ={addProduct} style={{paddingLeft:"10%",paddingRight:"20%"}}>
                <div className='form-group'>
                <label className='form-label'>Add product name:</label><br/>
                <input type='text' name='name' className='form-control' onChange={inputChangeHandler} value={item.name}/>
                </div>
                <div className='form-group'>
                <label className='form-label'>Enter product price:</label><br/>
                <input type='text' name='price' className='form-control'  onChange={inputChangeHandler} value={item.price}/>
                </div>
                <div className='form-group'>
                <label className='form-label'>Enter product company</label><br/>
                <input type='text' name='company' className='form-control'  onChange={inputChangeHandler} value={item.company}/>

                </div>
                <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                
            </form>
        </div>
    )
}
export default EditProductComp
