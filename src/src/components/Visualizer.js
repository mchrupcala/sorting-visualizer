import React from "react";
import './styles.css'

const Visualizer = (props) => {

let bars = props.sortedArray.map((i, index) => {
    return (
        <div className="one-bar" key={index} style={{height: `${i}px`}}>
            {/* {i} */}
        </div>
    )
})



    return (
        <div className="visualizer">
            <div className="graph">
                {bars}
            </div>
        </div>
    )
}

export default Visualizer;