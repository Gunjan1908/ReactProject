import React from 'react'
import{Link} from 'react-router-dom';
const NavComp=()=> {
    return (
        <div>
            {/* <h1>This is Nav component</h1> */}
            <Link to="/carousel" className='btn btn-outline-primary btn-sm'>carousel
            </Link>{" "}
            <Link to="/list" className='btn btn-outline-primary btn-sm'>Fav color</Link>{" "}
            <Link to="/multimedia" className='btn btn-outline-primary btn-sm'>Multimedia</Link>{" "}
            <Link to="/form/:id" className='btn btn-outline-primary btn-sm'>Form</Link>{" "}
            <Link to="/hooks" className='btn btn-outline-primary btn-sm'>Hooks</Link>{" "}
            <Link to="/dashboard" className='btn btn-outline-success btn-sm'>CRUD</Link>{" "}


            

        </div>
    )
}

export default NavComp
