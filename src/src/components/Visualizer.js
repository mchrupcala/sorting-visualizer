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

        // useEffect(() => {
        //     console.log(props.sortedArray)
        //     bars =  props.sortedArray.map(i => {
        //         return (
        //             <div className="one-bar" style={{height: `${i}px`}}>
        //                 {/* {i} */}
        //             </div>
        //         )
        //     })
        //     console.log("Updated!")
        // }, [])



    return (
        <div className="visualizer">
            <div className="graph">
                {bars}
            </div>
        </div>
    )
}

export default Visualizer;