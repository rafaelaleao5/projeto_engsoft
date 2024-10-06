import React from 'react'
import Topbar from '../scenes/dashboard/global/Topbar'
import Sidebar from '../scenes/dashboard/global/sidebar/Sidebar'
import Dashboard from '../scenes/dashboard/Dashboard'
function Menu () {
    return (
        <div className="menu">
            <Topbar/>
            <Sidebar/>
            <Dashboard/>
        </div>
    )
}

export default Menu