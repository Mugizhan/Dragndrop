import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dragndrop from './Component/Dragndrop'

const App = () => {

  return (
    <div>
      <BrowserRouter basename='/Dragndrop/'>
      <Routes>
        <Route path='/' element={<Dragndrop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App