import React from 'react';
import GraphComponent from './components/GraphComponent'; // 👈 Import it here

function App() {
  return (
      <div className="App">
        <h1>Graph Hosting App</h1>
        <GraphComponent />  {/* 👈 Use the component here */}
      </div>
  );
}

export default App;
