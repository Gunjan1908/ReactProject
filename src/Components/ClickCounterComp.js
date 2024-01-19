import React, { Component } from "react";
import Hoc from "./Hoc";

class ClickCounterComp extends Component {
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
            <h2>This is Click Counter Component</h2>
            {/* <p>Counter Value is :<strong>{this.state.count}</strong></p>
            <button type="button" onClick={this.incrementCount}> Increment counter</button> */}
              <p>Counter Value is :<strong>{this.props.count}</strong></p>
            <button type="button" onClick={this.props.incrementCount}> Increment counter</button>
        </div>)
    }
}
export default Hoc(ClickCounterComp,2) ;