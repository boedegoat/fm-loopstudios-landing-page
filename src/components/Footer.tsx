import { Logo } from '../images'
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-black text-white py-14'>
      <div className='wrapper flex flex-col items-center lg:flex-row lg:justify-between'>
        <div>
          {/* logo */}
          <img src={Logo} alt='loopstudios logo' className='w-36' />
          {/* links */}
          <div className='flex flex-col items-center space-y-4 mt-8 lg:space-x-4 lg:flex-row lg:space-y-0'>
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
          </div>
        </div>
        <div className='mt-10 lg:mt-0'>
          <div className='flex justify-center space-x-4 lg:justify-end'>
            <a href='#' className='social-links'>
              <FaFacebookSquare size={25} />
            </a>
            <a href='#' className='social-links'>
              <FaTwitter size={25} />
            </a>
            <a href='#' className='social-links'>
              <FaPinterest size={25} />
            </a>
            <a href='#' className='social-links'>
              <FaInstagram size={25} />
            </a>
          </div>
          <p className='text-sm text-dark-gray-100 mt-5'>
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
