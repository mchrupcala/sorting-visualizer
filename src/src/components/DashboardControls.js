import React from "react";


const DashboardControls = (props) => {
    return (
        <div className="dashboard-controls">
            Hi from Dashboard
            <button onClick={props.start_sort}></button>
        </div>
    )
}

export default DashboardControls;