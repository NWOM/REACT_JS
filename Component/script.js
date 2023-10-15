import React from 'react';
import ReactDOM from 'react-dom';
//component is a simple JS function 
//First letter of the name of the component should be CAPITAL 
import {HelloPlanet} from './components/HelloPlanet'

ReactDOM.render(
  <div>
   <HelloPlanet name="Earth"  />
   <HelloPlanet name="Mars"  />
   <HelloPlanet name="Pluto"  />
  </div>,
  document.getElementById('firstapp')
);
