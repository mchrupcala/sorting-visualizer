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


    //sortedArray is both the UNSORTED & SORTED arrays.
    //Clement --> array = UNSORTED, animations = SORTED
    //UNSORTED is only reset when app's refreshed (useState), or "Generate" onClick



    return (
        <div className="visualizer">
            <div className="graph">
                {bars()}
            </div>
        </div>
    )
}

export default Visualizer;