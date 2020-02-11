import React from 'react';
import './styles.css'

const MobileControls = (props) => {
    return (
    <div className="mobile">
        <ul className="sort-choices">
            <li onClick={props.merge_sort}>Merge Sort</li>
            <li onClick={props.bubble_sort}>Bubble Sort</li>
            <li onClick={props.quick_sort}>Quick Sort</li>
        </ul>
    </div>
    )
}

export default MobileControls;