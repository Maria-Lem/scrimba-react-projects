import React from 'react';
import AppReactFacts from './projects/react-facts-webpage/components/app-react-facts';
import Card from './projects/digital-business-card/components/card';
import AppAirbnb from './projects/airbnb/components/app-airbnb';
import TravelJournal from './projects/travel-journal/components/travel-journal';

function App() {
  return (
    <div className="App">
      <div className="container">
        <AppReactFacts />
      </div>
      <div className="container_card">
        <Card />
      </div>
      <div className="container_card">
        <AppAirbnb />
      </div>
      <div className="container_card">
        <TravelJournal />
      </div>
    </div>
  );
}

export default App;
