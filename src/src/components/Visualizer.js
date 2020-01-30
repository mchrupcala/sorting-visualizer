import React from "react";
import './styles.css'

const Visualizer = (props) => {

    const bars = () => {
        return props.sorted_array.map(i => {
            return (
                <div className="one-bar">
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