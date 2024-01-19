import React from 'react'

const UserComp = (props) => {
    if (props.uname ==="Teju") {
        // return "not a user"
        throw new Error("not a user");
    }
    // return (
    //      <div>
    //     {/* //     <h2>This is user component</h2>
    //     //     <h3>{props.uname} Login Successful</h3> */}
    //      </div>)
  

return <h3>{props.uname} Login Successful</h3> 
}

export default UserComp
