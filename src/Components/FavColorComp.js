import React, { Component } from 'react'

 class FavColorComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            colors:[
                {id:101, name:"Red" },
                {id:102, name:"blue" },
                {id:103, name:"yellow" },
                {id:104, name:"pink" }
            ]
            }
             
        }
    
    render() {
        const{colors}= this.state;

        return (
            <div>
                <h2>This is favourite color comp</h2>
                <ul>{
                colors.map((val,index)=>{ 
                    // return <li key ={val.id}>{val.name}</li>
                    return<li key={index}>{val.name}</li>
                })}
                </ul>
            </div>
        )
    }
}

export default FavColorComp
