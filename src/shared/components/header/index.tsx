import React from 'react'

const NavBar: React.FC = () => {
  return (
    <header className='bg-red-dark p-8'>
      <nav className='container mx-auto flex flex-wrap items-center justify-between'>
        <h1 className='text-xl font-bold text-white'>APAD</h1>
      </nav>
    </header>
  )
}

export { NavBar }
