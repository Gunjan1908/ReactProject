import react, { Component } from "react";
class MyClassComp extends Component{
    render(){
        return (<div>
            <h2>employee info</h2>
            <p>fname:{this.props.fname} lname:{this.props.lname} company:{this.props.company} gender:{this.props.gender} age{this.props.age}</p>
        </div>)

    }
    
}
export default MyClassComp;