import React, { Component } from 'react'

 class LifeCycleComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color:"red"
        }
    }
    // static getDerivedStateFromProps(props){
    //     return{
    //         color:props.mycolor
    //     }
    // }
    // componentDidMount(){
    //     setTimeout(() => {
    //     this.setState({color:"blue"})
    //     }, 3000);

    // }
    shouldComponentUpdate(){
        return true;
       // return false;
    }
    changeColor =()=>{
        this.setState({color:"pink"})
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeupdate").innerHTML=`my fav color before update ${prevState.color}`;
        document.getElementById("afterupdate").innerHTML=`my fav color after update ${this.state.color}`;


    }
   
    render() {
        return (
            <div>
                <h2>This is life cycle component</h2>
                <p>You have selected <strong>{this.state.color}</strong>Color</p>
                <div id='beforeupdate'></div>
                <div id='afterupdate'></div>
                <button type='button' onClick={this.changeColor} className='btn btn-primary mt-2'>change color</button>
            </div>
        )
    }
}

export default LifeCycleComp
