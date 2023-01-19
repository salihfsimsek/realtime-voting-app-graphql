import React from 'react'

//React router dom
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'

//Redux
import { useSelector } from 'react-redux'

const App = () => {
  const data = useSelector(state => state.searchField.value)
  console.log(data)
  return (
    <div>
      <Header />
      <h1>{data}</h1>
    </div>
  )
}

export default App