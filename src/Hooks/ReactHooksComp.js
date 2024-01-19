import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function ReactHooksComp() {
    return (
        <div>
            <h2>React Hooks component</h2>
            <div className='card border-primary'>
                <div className='card-header border-primary'>
                    <Link to="useState" className='btn btn-outline-danger btn-sm'>UseState</Link>{" "}
                    <Link to="useEffect" className='btn btn-outline-danger btn-sm'>UseEffect</Link>{" "}
                </div>
                <div className='card-body border-primary'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default ReactHooksComp
