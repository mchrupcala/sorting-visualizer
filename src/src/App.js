import React, {useState, useEffect} from 'react';
import './App.css';
import './components/styles.css'
import Nav from './components/Nav';
import DashboardControls from './components/DashboardControls';
import MobileControls from './components/MobileControls';
import Visualizer from './components/Visualizer';
import {getMergeSortAnimations} from './algorithms/MergeSort';
import {getBubbleSortAnimations} from './algorithms/BubbleSort';
import {getQuickSortAnimations} from './algorithms/QuickSort';
// import {getHeapSortAnimations} from './algorithms/HeapSort';


function App() {
  let [sortedArray, setSortedArray] = useState([]);
  let [trueSort, setTrueSort] = useState([]);
  let testarray = [];
  let animations;
  // Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 50;

// Change this value for the number of bars (value) in the array.
let NUMBER_OF_ARRAY_BARS = 0;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


const randomArray = () => {
  let rand = (Math.random()+0.01) * 75;
  console.log(rand);
  for (let i = 0; i < rand; i++) {
    testarray.push(Math.floor(Math.random()*10) * i)
  }
}

//Also call this function when the user clicks to reset/generate a new function.
const resetArray = () => {
  setSortedArray([]);
  randomArray();
  NUMBER_OF_ARRAY_BARS = testarray.length;
  setSortedArray(testarray);
}

//Confirms that a random array will be sorted correctly. sortedArray is initalized w/ testarray...then on-click, mergesort is applied to it.
useEffect(() => {
  resetArray();
}, [])

let viewportWidth = window.innerWidth;

const controller = () => {
  if (viewportWidth > 600) {
    return (
      <DashboardControls 
      merge_sort={merge_sort} 
      bubble_sort={bubble_sort} 
      quick_sort={quick_sort}
      // heap_sort={heap_sort}
      />
  );
  } else {
    return (
      <div>
        ok
      </div>
    );
  }
}

//!!write a ternary so that depending on which button a user clicks on, that sort is run

//Not sure if this will work without my useState hook on line 34.
const merge_sort = () => {
  // setAlgo('Merge Sort');
  // setSortedArray(mergesort(sortedArray));
  animations = getMergeSortAnimations(sortedArray);
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
  // setAlgo('Bubble Sort');
  animations = getBubbleSortAnimations(sortedArray);
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
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${barTwoNewHeight}px`;
        barTwoStyle.height = `${barOneNewHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
}
}

const quick_sort = () => {
  // setSortedArray(mergesort(sortedArray));
  animations = getQuickSortAnimations(sortedArray);
  // setTrueSort(sortedArray);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('one-bar');
    const isColorChange = i % 3 === 0 || i % 3 === 1 ? true: false;
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
        const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${barTwoNewHeight}px`;
        barTwoStyle.height = `${barOneNewHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
}
}

// const heap_sort = () => {
//   const animations = getHeapSortAnimations(sortedArray);
// }


  return (
    <div className="App">
      {/* {controller()}
     */}
           <DashboardControls 
      merge_sort={merge_sort} 
      bubble_sort={bubble_sort} 
      quick_sort={quick_sort}
      // heap_sort={heap_sort}
      />


      
      <div className="main-dash">
          <Nav />
          <MobileControls
      className="mobile"
      merge_sort={merge_sort} 
      bubble_sort={bubble_sort} 
      quick_sort={quick_sort}
      />
          <div id="content">
            <Visualizer 
            randomArray={randomArray} 
            resetArray={resetArray} 
            sortedArray={sortedArray} 
            trueSort={trueSort}
            NUMBER_OF_ARRAY_BARS={NUMBER_OF_ARRAY_BARS} />
          </div>
      </div>
    </div>
  );
}

export default App;