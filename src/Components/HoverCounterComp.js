import React, { Component } from "react";
import Hoc from "./Hoc";

class HoverCounterComp extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     }
    // }
    // incrementCount = ()=>{
    //     this.setState((prevState)=>({count:prevState.count+1}))
    // }
    render() {
        return (<div>
            <h2>This is HoverCounterComp Component</h2>
            {/* <p>Counter Value is :<strong>{this.state.count}</strong></p>
            <h2 onMouseOver={this.incrementCount}>Hover On Me to Increment counter</h2> */}
             <p>Counter Value is :<strong>{this.props.count}</strong></p>
            <h2 onMouseOver={this.props.incrementCount}>Hover On Me to Increment counter</h2>
        </div>)
    }
}
export default Hoc(HoverCounterComp,5) ;