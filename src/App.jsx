import { useState } from 'react'

import './App.css'
import Homepage from "./components/Homepage"
import Foodcard from './components/Foodcard'
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
        <Routes>

   
      <Route path='/' element={<Homepage />} />
    
        </Routes>
    </Router>
    </>
  )
}

export default App
