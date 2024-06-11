import React from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'
import { useState } from "react"

const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App