import react, { Component } from "react";
import { Outlet } from "react-router-dom";
class ClassComp extends Component{

    render(){
        const{myName,post}=this.props;
        return (<div>
            <h2>This is class component</h2>
            <p>myName is<strong>{myName}</strong></p>
            <p>i am<strong>{post}</strong></p>
            <Outlet/>
        </div>)
    }
}
export default ClassComp;