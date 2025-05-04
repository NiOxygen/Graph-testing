import React from 'react';
import CSVGraph from './components/CSVGraph'; // 👈 Import it here

function App() {
  return (
      <div className="App">
        <h1>Graph Hosting App</h1>
        <CSVGraph />  {/* 👈 Use the component here */}
      </div>
  );
}

export default App;
