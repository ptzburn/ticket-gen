import React from 'react'
import Header from './components/Header.jsx'
import FormPage from './pages/FormPage.jsx'
import { Route, Routes } from 'react-router-dom'
import TicketPage from './pages/TicketPage.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/ticket" element={<TicketPage />} />
      </Routes>
    </>
  )
}
export default App
