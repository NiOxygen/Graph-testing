import React from 'react';
import CSVGraph from './components/CSVGraph';
import Station_Map from './components/Station_Map';

function App() {
  return (
      <div className="App">
        <h1>Tacloban City Air Quality</h1>
        <CSVGraph />
          <Station_Map />
      </div>
  );
}

export default App;
