import React from 'react';
import './App.css';
import './components/styles.css'
import Nav from './components/Nav';
import DashboardControls from './components/DashboardControls';
import Visualizer from './components/Visualizer';
import {mergesort} from './algorithms/MergeSort';

function App() {
  let testarray = [];

const randomArray = () => {
  let rand = Math.random() * 100;
  console.log(rand)
  for (let i = 0; i < rand; i++) {
    testarray.push(Math.floor(Math.random()*10) * i)
  }
}

//Confirm that a random array will be sorted correctly.
randomArray();
console.log(testarray);
let sorted_array = mergesort(testarray);
console.log(sorted_array);



  return (
    <div className="App">
      <Nav />
      
      <div className="main-dash">
        <DashboardControls />
        <Visualizer sorted_array={sorted_array}/>
      </div>
    </div>
  );
}

export default App;
