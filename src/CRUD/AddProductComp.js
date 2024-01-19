import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddProductComp = () => {
    const nav = useNavigate();//use to redirect to added product page
    const[item,setItem]= useState({
        name:"",
        price:"",
        company:""
    });

    const inputChangeHandler= (event)=>{
        const{type,name,value} = event.target;
        setItem({...item,[name]: value});


    }
    const addProduct =(event)=>{
        event.preventDefault();
        console.log(item);
        axios.post("http://localhost:5050/product",item).then(()=>{
            window.alert("product addeed successfully");
            nav("/dashboard");
        }).catch((err)=>{})

    }
    return (
        <div>
            <h2>Add product</h2>
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
