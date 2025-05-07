import React from 'react';
import CSVGraph from './components/CSVGraph'; // 👈 Import it here
import React from 'react';
import SimpleMap from './SimpleMap';

function App() {
  return (
      <div className="App">
        <h1>Tacloban City Air Quality</h1>
        <CSVGraph />
          <Station_Maps />
      </div>
  );
}

export default App;
