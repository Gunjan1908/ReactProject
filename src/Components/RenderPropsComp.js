import React, { Component } from 'react'

class RenderPropsComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          count:0   
        }
    }
     incrementCount = ()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    render() {
        return (
            <div>
               <h2>This is Render Props Component</h2> 
               {/* <p>My Name is : {this.props.render(true)}</p> */}
               <p>{this.props.render(this.state.count,this.incrementCount)}</p>
            </div>
        )
    }
}

export default RenderPropsComp