import React from "react";


const DashboardControls = (props) => {
    return (
        <div className="dashboard-controls">
            Hi from Dashboard
            <button >Sort</button>
            <h2 onClick={props.merge_sort} className="sort-banner">Merge Sort</h2>
            <h2 onClick={props.bubble_sort} className="sort-banner">Bubble Sort</h2>
            <h2 onClick={props.start_sort} className="sort-banner">Quick Sort</h2>
            <h2 onClick={props.start_sort} className="sort-banner">Heap Sort</h2>
        </div>
    )
}

export default DashboardControls;