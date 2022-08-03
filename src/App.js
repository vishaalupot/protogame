import React from 'react';
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import  Game  from './Level1.js';


function App() {

  return (
   <BrowserRouter>
   <Routes>
     <Route exact path="/protogame" exact element={<Game/>} />
   </Routes>
   </BrowserRouter>
  );

}
export default App;