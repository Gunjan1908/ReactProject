import React, { Component } from "react";

class Render extends Component{

    constructor(){
        super();
        this.state={
            isLogin :true
        }
    }

    render(){
        const{isLogin} =this.state;
        // return (<div>
        //     <h2>This is Render Component</h2>
        // </div>)
        //====================================================
        //if else
        // if(!isLogin){
        //     return <h2>Admin Login Successful</h2>
        // }
        // else{
        //     return <h2>user login Successful</h2>

        // }
          //=======================================================
        //2.Element as variable
      
    //     let msg="";
    //     if(isLogin){
    //         msg="Admin Login Successful"
    //     }
    //     else{
    //         msg="user login Successful"
    //     }
    //     return msg;
    //=======================================================
    //3.use of ternary operator
   // return(!isLogin)?<h2>Admin Login Successful</h2>:<h2>user login Successful</h2>
   //=======================================================
   //4. use of short circuit
   return (isLogin) && <h2>Admin Login successful</h2>;
    }

}
export default Render;