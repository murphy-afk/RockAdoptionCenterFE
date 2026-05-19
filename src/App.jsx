
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import AllRocks from './pages/AllRocks';
import Home from './pages/Home';
import RockDetail from './pages/RockDetail';
import AppLayout from './layouts/AppLayout';

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/rocks' element={<AllRocks />} />
            <Route path='/rocks/:id' element={<RockDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
