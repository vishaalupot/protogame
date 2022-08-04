import React from 'react';
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import  Game  from './Level1.js';
import  Welcome  from './Welcome.js';
import Leader from './Leaderboard.js';


function App() {

  return (
   <BrowserRouter>
   <Routes>
     <Route exact path="/protogame" exact element={<Welcome/>} />
     <Route exact path="/protogame/game" exact element={<Game/>} />
     <Route exact path="/protogame/game/leader" exact element={<Leader/>} />
   </Routes>
   </BrowserRouter>
  );

}
export default App;