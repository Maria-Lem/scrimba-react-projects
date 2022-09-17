import React from 'react';
import AppReactFacts from './projects/react-facts-webpage/components/app-react-facts';
import Card from './projects/digital-business-card/components/card';

function App() {
  return (
    <div className="App">
      <div className="container">
        <AppReactFacts />
      </div>
      <div className="container_card">
        <Card />
      </div>
    </div>
  );
}

export default App;
