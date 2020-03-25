import React from "react";
import Button from './styling_components/Button';

const Nav = (props) => {
    return (
        <div className="nav">
            <div> <h1>Pick a Sort Algorithm</h1></div>
            <div className="visualizer-button-controls desktop">
            <Button className="ui primary button" func={props.merge_sort} text={"Merge Sort"}/>
            <Button className="ui primary button" func={props.bubble_sort} text={"Bubble Sort"}/>
            <Button className="ui primary button" func={props.quick_sort} text={"Quick Sort"}/>
            </div>
        </div>
    )
}

export default Nav;