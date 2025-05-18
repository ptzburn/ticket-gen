import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

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
    <div className="text-white text-center p-4">
      <h2 className="text-2xl mb-4">Your Submitted Data</h2>
      <div className="flex flex-col items-center">
        <p>
          <strong>Name:</strong> {name || 'N/A'}
        </p>
        <p>
          <strong>Email:</strong> {email || 'N/A'}
        </p>
        <p>
          <strong>GitHub Username:</strong> {username || 'N/A'}
        </p>
        {avatar ? (
          <div className="mt-4">
            <p>
              <strong>Avatar:</strong> {avatar.name} (
              {(avatar.size / 1000).toFixed(2)} KB, {avatar.type})
            </p>
            <img
              src={avatar.preview}
              alt="Avatar Preview"
              className="max-h-[100px] max-w-[100px] mt-2"
            />
          </div>
        ) : (
          <p>
            <strong>Avatar:</strong> None
          </p>
        )}
      </div>
    </div>
  )
}

export default TicketPage
