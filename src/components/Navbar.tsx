import Logo from '../images/logo.svg'
import useToggle from '../hooks/useToggle'

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

export default function Navbar() {
  const [showMobileNav, toggleMobileNav] = useToggle()

  const MobileBtnIcon = showMobileNav ? (
    // close icon
    <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z'
        fill='#FFF'
        fill-rule='evenodd'
      />
    </svg>
  ) : (
    // open icon
    <svg width='24' height='16' xmlns='http://www.w3.org/2000/svg'>
      <g fill='#FFF' fill-rule='evenodd'>
        <path d='M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z' />
      </g>
    </svg>
  )

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
          {MobileBtnIcon}
        </button>
      </div>

      {/* mobile menu goes here */}
      {showMobileNav && (
        <div className='fixed z-10 inset-0 bg-black text-white'>
          <div className='wrapper flex flex-col absolute top-1/2 -translate-y-1/2 font-josefin uppercase text-xl space-y-4'>
            <NavbarLinks />
          </div>
        </div>
      )}
    </nav>
  )
}
