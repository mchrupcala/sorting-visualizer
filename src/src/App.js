import React from 'react';
import './App.css';
import './components/styles.css'
import Nav from './components/Nav';
import DashboardControls from './components/DashboardControls';
import Visualizer from './components/Visualizer';

function App() {
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
