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
randomArray();
// Sort the 'testarray' to confirm that my sort algo's working correctly.
console.log(testarray);

mergesort(testarray);

  return (
    <div className="App">
      <Nav />
      
      <div className="main-dash">
        <DashboardControls />
        <Visualizer />
      </div>
    </div>
  );
}

export default App;
