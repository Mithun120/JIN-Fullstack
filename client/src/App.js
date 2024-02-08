import React from 'react'
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timesheet from './Components/Timesheet';
import TotalCalculator from './Components/total';

const App = () => {
  return (
    // <TotalCalculator/>
    <BrowserRouter>
      <Sidebar/>

    <Routes>
      <Route path="/timesheet" element={<Timesheet/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
