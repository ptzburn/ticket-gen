import React from 'react'

const Ticket = ({ name, username, avatar }) => {
  return (
    <div className="ticket">
      <div className="flex mt-5 ml-5 items-start">
        <img src="logo.svg" alt="logo" />
        <div className="flex flex-col items-start ml-4">
          <h2 className="lg:text-3xl">Coding Conf</h2>
          <p className="text-gray-300 lg:text-sm mt-2">
            Dec 31, 2025 / Helsinki, FIN
          </p>
        </div>
      </div>
      <div className="flex ml-4 mb-5">
        <img src={avatar.preview} alt="avatar" className="rounded-3xl w-24" />
        <div className="flex flex-col items-start ml-4">
          <h3 className="lg:text-2xl">{name}</h3>
          <span className="flex mt-2">
            <img src="icon-github.svg" alt="github icon" />
            <p className="ml-2 text-gray-300">{username}</p>
          </span>
        </div>
      </div>
    </div>
  )
}
export default Ticket
