import { Component } from "react";
import ChildComp from "./ChildComp";
import MyPureComp from "./MyPureComp";
import ReactMemoComp from "./ReactMemoComp";

class ParentComp extends Component{

   constructor(){
    super();
    this.state ={
        count:0,
        name:"Gunjan"
    }}

    changeData =()=>{
        this.setState((prevState)=>({count:prevState.count+1, name:"Gunjan P"}));
    }
   
    render(){
        console.log("parent component");
        const{count,name}=this.state;
        
        return (<div>
            <h1>this is parent component</h1>
            <p >my name is :<strong>{name}</strong></p>
            <p >value:<strong>{count}</strong></p>
            <button className="btn btn-primary" type= "button" onClick={this.changeData}>change state property</button>

<hr/>
<ChildComp count ={count} name={name} changeData={this.changeData}></ChildComp>
<hr/>
<MyPureComp name = {name} />
<hr/>
<ReactMemoComp name ={name}/>

        </div>)
    }

}
export default ParentComp;