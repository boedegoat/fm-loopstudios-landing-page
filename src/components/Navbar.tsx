import { Logo, IconClose, IconHamburger } from '../images'
import useToggle from '../hooks/useToggle'
import { cn } from '../lib'

export default function Navbar() {
  const [showMobileNav, toggleMobileNav] = useToggle()

  return (
    <nav className='fixed z-20 top-0 left-0 w-full py-[50px]'>
      <div className='wrapper flex items-center justify-between'>
        {/* logo here */}
        <img src={Logo} alt='loopstudios logo' className='z-20' />

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
        'fixed z-10 inset-0 bg-black text-white transition-all duration-300 ease-in-out',
        showMobileNav ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div className='wrapper flex flex-col absolute top-1/2 -translate-y-1/2 font-josefin uppercase text-xl space-y-4'>
        <NavbarLinks />
      </div>
    </div>
  )
}

function NavbarLinks() {
  return (
    <>
      <a href='#'>About</a>
      <a href='#'>Careers</a>
      <a href='#'>Events</a>
      <a href='#'>Events</a>
      <a href='#'>Products</a>
      <a href='#'>Support</a>
    </>
  )
}
