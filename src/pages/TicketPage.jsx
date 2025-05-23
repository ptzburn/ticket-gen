import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Ticket from '../components/Ticket.jsx'

const TicketPage = () => {
  const { state } = useLocation()

  console.log(state)

  // Clean up preview URL on unmount
  useEffect(() => {
    return () => {
      if (state?.avatar?.preview) {
        URL.revokeObjectURL(state.avatar.preview)
      }
    }
  }, [state?.avatar?.preview])

  if (!state) {
    return <Navigate to={'/'} />
  }

  const { name, email, username, avatar } = state

  return (
    <div className="text-white text-center p-4 mt-20 flex justify-center items-center flex-col">
      <h1 className="max-w-200 block">
        Congrats,{' '}
        <span className="bg-gradient-to-r from-[#f57b6c] to-white bg-clip-text text-transparent">
          {name}
        </span>
        ! Your ticket is ready.
      </h1>
      <p className="text-gray-300 text-center items-center mt-10 max-w-100 mb-20">
        We've emailed your ticket to{' '}
        <span className="text-[#f57b6c]">{email}</span> and will send updates in
        the run up to the event.
      </p>
      <Ticket name={name} username={username} avatar={avatar} />
    </div>
  )
}

export default TicketPage
