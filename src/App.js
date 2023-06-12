import './App.css';
import 'office-ui-fabric-react/dist/css/fabric.css';
import React from 'react';

import Navigation from './Navigation';
import CardSection from './CardSection';

function App() {
  return (
    <div className='ms-Grid' dir='ltr'>
      <div className='ms-Grid-col ms-sm-1 ms-xl1'>
        <Navigation/>
      </div>
      <div className='ms-Grid-col ms-sm11 ms-xl11 main-element'>
        <CardSection/>
      </div>
    </div>
  );
}

export default App;

