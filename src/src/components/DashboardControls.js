import React from "react";
import Button from './styling_components/Button';
import Sidebar from './styling_components/Sidebar';

const DashboardControls = (props) => {
    return (
        <>
        {/* <div className="ui sidebar inverted vertical menu dashboard-controls">
            <a onClick={props.merge_sort} className="sort-banner item">
                Merge Sort
            </a>
            <a onClick={props.bubble_sort} className="sort-banner item">
            Bubble Sort
            </a>
            <a onClick={props.quick_sort} className="sort-banner item">
            Quick Sort
            </a>
             <Button className="ui primary button" text={"Sort"}/>
      </div> */}
      <Sidebar />
        </>
        // <div >
        //     <h2 onClick={props.merge_sort} className="sort-banner">Merge Sort</h2>
        //     <h2 onClick={props.bubble_sort} className="sort-banner">Bubble Sort</h2>
        //     <h2 onClick={props.quick_sort} className="sort-banner">Quick Sort</h2>
        //     {/* <h2 onClick={props.heap_sort} className="sort-banner">Heap Sort</h2> */}

        //     <Button className="ui primary button" text={"Sort"}/>
        // </div>
    )
}

export default DashboardControls;