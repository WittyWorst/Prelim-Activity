import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/products/:id' element={<ItemDetail/>}></Route>
    </Routes>
  )
}

export default App
