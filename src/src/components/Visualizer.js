import React from "react";
import './styles.css'

const Visualizer = (props) => {

    const bars = () => {
        return props.sortedArray.map(i => {
            return (
                <div className="one-bar" style={{height: `${i}px`}}>
                    {i}
                </div>
            )
        })
    }



    return (
        <div className="visualizer">
            <div className="graph">
                {bars()}
            </div>
        </div>
    )
}

export default Visualizer;