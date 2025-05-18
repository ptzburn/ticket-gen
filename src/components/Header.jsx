import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="pt-10" src="/logo-full.svg" alt="Coding conf" />
      </Link>
    </header>
  )
}
export default Header
