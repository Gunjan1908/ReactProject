import react, { Component } from "react";
class MyStateComp extends Component{

    constructor(){
        super();
        this.state={
            myName:"Gunjan",
            salary:50000
        }
        setTimeout(()=>{
            // this.setState({salary:this.state.salary+1,
            // myName:"Gunjan Patange"});//direct method

            this.setState((prevState)=>({salary:prevState.salary+1,
            myName:"Gunjan  Patange"})); //indirect


        },2000);

    }
    render(){
        //destructuring state
        const{myName,salary}=this.state;
        return(<div> 
            <h2>this is my state component</h2>
            {/* <p>myName:{this.state.myName} salary:{this.state.salary}</p> */}
            <p>myName:{myName} salary:{salary}</p>
            </div>)
    }


}
export default MyStateComp;