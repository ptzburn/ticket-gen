import React from 'react'

const getRandom = () => {
  const minCeiled = Math.ceil(10000)
  const maxFloored = Math.floor(100000)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

const Ticket = ({ name, username, avatar }) => {
  return (
    <div className="ticket">
      <div className="flex flex-col justify-between lg:w-[500px] lg:h-[280px] w-[325px] h-[182px]">
        <div className="flex mt-5 ml-5 items-start">
          <img src="logo.svg" alt="logo" />
          <div className="flex flex-col items-start ml-4">
            <h2 className="lg:text-3xl">Coding Conf</h2>
            <p className="text-gray-300 lg:text-sm mt-2 text-xs">
              Dec 31, 2025 / Helsinki, FIN
            </p>
          </div>
        </div>
        <div className="flex ml-4 mb-5 items-end">
          <img
            src={avatar.preview}
            alt="avatar"
            className="lg:rounded-3xl lg:w-24 w-16 lg:h-24 h-16 rounded-xl"
          />
          <div className="flex flex-col items-start ml-4">
            <h3 className="lg:text-2xl">{name}</h3>
            <span className="flex mt-2 items-center">
              <img src="icon-github.svg" alt="github icon" />
              <p className="ml-2 text-gray-300 lg:text-sm text-xs">
                {username}
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="items-center align-middle flex">
        <p className="rotate-90 text-gray-400 lg:text-2xl">#{getRandom()}</p>
      </div>
    </div>
  )
}
export default Ticket
