import React from 'react'

const Header = ({name}) => {
  return (
    <>
        <header>
          <h1>{!name ? "" : name}</h1>
        </header>
    </>
  )
}

export default Header