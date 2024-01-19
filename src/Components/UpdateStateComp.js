import React, { Component } from "react";
class UpdateStateComp extends Component{

   constructor(){
    super();
    this.state={
        count:1
    }  
   }
   increamentCounter= () =>{
    // window.alert("hi");
    this.setState((prevState)=>({count:prevState.count+1}))

   }
   decrementCounter= () =>{

    this.setState((prevState)=>({count:prevState.count-1}))

   }
   
    
    
    render(){
        const{count}=this.state;

        return (<div>
            <h2>This is UpdateState Component</h2>
            <div>counter value is: <strong>{count}</strong></div>
            <button type="button" onClick={this.increamentCounter}>counter ++</button>{" "}
            <button type="button" onClick={this.decrementCounter}>counter --</button>
        </div>)
    }

}

export default UpdateStateComp;