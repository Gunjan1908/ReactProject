import image from '../assets/images/img1.jpg';


import { Component } from "react";


class ToggleTask extends Component{

    change=()=>{
        this.setState((prevState)=>({count:prevState}));
    }
    render(){
        return(<div>
            <h2>Toggle Image</h2>
             <img src={image} alt='image' height="200px"/><br/><br/>
         <button type="button" onClick={this.change}>Change image</button>

        </div>)
    }

}
 export default ToggleTask;