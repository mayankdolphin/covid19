import React from 'react';
import './App.css';
import FetchStateData from './Component/FetchStateData';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="text-center covid-center">
          <h3 class="text-center col-lg-12">Covid19 India</h3>
          <FetchStateData />
        </div>
      </div>
    </div>
  );
}

export default App;
