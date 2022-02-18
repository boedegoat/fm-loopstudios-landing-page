import { Logo, IconClose, IconHamburger } from '../images'
import useToggle from '../hooks/useToggle'
import { cn } from '../lib'
import { useEffect } from 'react'

export default function Navbar({ changeNavStyle }: { changeNavStyle: boolean }) {
  const [showMobileNav, toggleMobileNav] = useToggle()

  useEffect(() => {
    if (showMobileNav) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [showMobileNav])

  return (
    <nav
      className={cn(
        'fixed z-20 top-0 left-0 w-full py-[50px]',
        changeNavStyle ? 'bg-black py-[20px]' : 'bg-transparent'
      )}
      style={{
        transition: 'padding 0.3s ease-out, background-color 0.2s ease-out',
      }}
    >
      <div className='wrapper flex items-center justify-between'>
        {/* logo here */}
        <a href='#' className='z-20'>
          <img src={Logo} alt='loopstudios logo' />
        </a>

        {/* primary nav links */}
        <div className='hidden lg:flex space-x-10 text-white'>
          <NavbarLinks />
        </div>

        {/* mobile nav icon */}
        <button className='lg:hidden z-20' onClick={() => toggleMobileNav()}>
          {showMobileNav ? (
            <img src={IconClose} alt='close icon' />
          ) : (
            <img src={IconHamburger} alt='hamburger icon' />
          )}
        </button>
      </div>

      {/* mobile menu goes here */}
      <MobileMenu showMobileNav={showMobileNav} />
    </nav>
  )
}

function MobileMenu({ showMobileNav }: { showMobileNav: boolean }) {
  return (
    <div
      className={cn(
        'lg:hidden fixed z-10 inset-0 bg-black text-white transition-all duration-300 ease-in-out',
        showMobileNav ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div className='wrapper h-full'>
        <div className='absolute top-1/2 -translate-y-1/2 flex flex-col font-josefin uppercase text-xl space-y-4'>
          <NavbarLinks />
        </div>
      </div>
    </div>
  )
}

function NavbarLinks() {
  return (
    <>
      <a href='#' className='nav-links'>
        About
      </a>
      <a href='#' className='nav-links'>
        Careers
      </a>
      <a href='#' className='nav-links'>
        Events
      </a>
      <a href='#' className='nav-links'>
        Events
      </a>
      <a href='#' className='nav-links'>
        Products
      </a>
      <a href='#' className='nav-links'>
        Support
      </a>
    </>
  )
}
