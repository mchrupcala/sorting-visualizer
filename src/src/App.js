import React, {useState, useEffect} from 'react';
import './App.css';
import './components/styles.css'
import Nav from './components/Nav';
import DashboardControls from './components/DashboardControls';
import Visualizer from './components/Visualizer';
import {mergesort} from './algorithms/MergeSort';

function App() {
  let [sortedArray, setSortedArray] = useState([]);
  let testarray = [];

const randomArray = () => {
  let rand = Math.random() * 100;
  console.log(rand)
  for (let i = 0; i < rand; i++) {
    testarray.push(Math.floor(Math.random()*10) * i)
  }
}

randomArray()
//Confirm that a random array will be sorted correctly.
useEffect(() => {
  setSortedArray(testarray);
}, [])
console.log(testarray);
// setSortedArray(testarray);
console.log(sortedArray);

const start_sort = () => {
  setSortedArray(mergesort(sortedArray));
  console.log(sortedArray);
}




  return (
    <div className="App">
      <Nav />
      
      <div className="main-dash">
        <DashboardControls start_sort={start_sort}/>
        <Visualizer sortedArray={sortedArray}/>
      </div>
    </div>
  );
}

export default App;
