import React, { Component } from "react"

const Hoc =(Wrapper,val)=>{

    class HocComp extends Component {
        constructor() {
            super();
            this.state = {
                count: 0
            }
        }
        incrementCount = ()=>{
            this.setState((prevState)=>({count:prevState.count+val}))
        }
        render(){
            return <Wrapper count ={this.state.count} incrementCount={this.incrementCount} ></Wrapper>
        }
    }

    return HocComp
}
export default Hoc;