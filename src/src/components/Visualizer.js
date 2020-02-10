import React, {useEffect, useState} from "react";
import './styles.css';
import Button from './styling_components/Button';

const Visualizer = (props) => {
    let [index, setIndex] = useState(3);
    let [styled, setStyled] = useState('styledE');
    let [barWidth, setBarWidth] = useState(25);

    let bars = props.sortedArray.map((i, index) => {
        return (
            <div className="one-bar" key={index} style={{height: `${i}px`, width: `${barWidth}px`, maxWidth: '60px'}}>
                {/* {i} */}
            </div>
        )
    })

    useEffect(() => {
        if (props.sortedArray.length !== 0) {
            let screenWidth = document.getElementById("visualizer").offsetWidth;
            setBarWidth(screenWidth / props.sortedArray.length);
        }
    }, [props.sortedArray]);

    let barStyled = () => {
        if (index < 3) {
            setIndex(index+1);
        } else {
            setIndex(1);
    }
}


useEffect(() => {
    index === 2 ? setStyled('styledC') : index === 1 ? setStyled('styledS') : setStyled('styledE'); 
}, [index])


    return (
        <div id="visualizer">
            <div className={"graph " + styled}>
            {bars}
            </div>
                <div>
                    <Button className="ui primary button" func={props.resetArray} text={"Generate New Array"}/>
                    <Button className="ui primary button" func={barStyled} text={"Change Style"}/>
                </div>
        </div>
    )
}

export default Visualizer;