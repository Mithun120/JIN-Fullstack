import React from 'react'
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timesheet from './Components/Timesheet';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar/>
    <Routes>
      <Route path="/timesheet" element={<Timesheet/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
