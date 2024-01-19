import { Component, PureComponent } from "react";

class MyPureComp extends PureComponent{


    render(){
        console.log("My pure comp");
        return(<div>
            <h2>This is my pure component</h2>
            <p>My name is:<strong>{this.props.name}</strong></p>

        </div>)

    }
}
export default MyPureComp;