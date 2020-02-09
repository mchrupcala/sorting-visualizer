import React, {useState, useEffect} from 'react';
import './App.css';
import './components/styles.css'
import Nav from './components/Nav';
import DashboardControls from './components/DashboardControls';
import Visualizer from './components/Visualizer';
import {getMergeSortAnimations} from './algorithms/MergeSort';
import {getBubbleSortAnimations} from './algorithms/BubbleSort';
import {getQuickSortAnimations} from './algorithms/QuickSort';

function App() {
  let [sortedArray, setSortedArray] = useState([]);
  let [trueSort, setTrueSort] = useState([]);
  let testarray = [];

  // Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
let NUMBER_OF_ARRAY_BARS = 0;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


const randomArray = () => {
  let rand = (Math.random()+0.01) * 100;
  for (let i = 0; i < rand; i++) {
    testarray.push(Math.floor(Math.random()*10) * i)
  }
}

//Also call this function when the user clicks to reset/generate a new function.
const resetArray = () => {
  randomArray();
  NUMBER_OF_ARRAY_BARS = testarray.length;
  setSortedArray(testarray);
  console.log(testarray);
}

//Confirms that a random array will be sorted correctly. sortedArray is initalized w/ testarray...then on-click, mergesort is applied to it.
useEffect(() => {
  resetArray();
}, [])


//!!write a ternary so that depending on which button a user clicks on, that sort is run

//Not sure if this will work without my useState hook on line 34.
const merge_sort = () => {
  // setSortedArray(mergesort(sortedArray));
  const animations = getMergeSortAnimations(sortedArray);
  // setTrueSort(sortedArray);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('one-bar');
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      let [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
}
}


const bubble_sort = () => {
  const animations = getBubbleSortAnimations(sortedArray);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('one-bar');
    let [barOneIdx, barTwoIdx, dummy] = animations[i];
    if (animations[i].length === 3) {
      let [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = dummy === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] = animations[i];
        console.log([barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight])
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${barTwoNewHeight}px`;
        barTwoStyle.height = `${barOneNewHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
}
}




  return (
    <div className="App">
      <Nav />
      
      <div className="main-dash">
        <DashboardControls merge_sort={merge_sort} bubble_sort={bubble_sort}/>
        <Visualizer sortedArray={sortedArray} trueSort={trueSort}/>
      </div>
    </div>
  );
}

export default App;
