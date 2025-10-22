import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-black backdrop-blur-md py-5 text-font-white'>
        <Container className="flex items-center justify-between">
            <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0" >
              <MobileMenu />
              <Logo />
            </div>
            <HeaderMenu />
            <div className='w-auto md:w-1/3 flex items-center justify-end'>
               <SearchBar />
            </div>
        </Container>
    </header>
  )
}

export default Header