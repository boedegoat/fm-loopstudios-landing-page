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
            <a href='#'>About</a>
            <a href='#'>Careers</a>
            <a href='#'>Events</a>
            <a href='#'>Events</a>
            <a href='#'>Products</a>
            <a href='#'>Support</a>
          </div>
        </div>
        <div className='mt-10 lg:mt-0'>
          <div className='flex justify-center space-x-4 lg:justify-end'>
            <a href='#'>
              <FaFacebookSquare size={25} />
            </a>
            <a href='#'>
              <FaTwitter size={25} />
            </a>
            <a href='#'>
              <FaPinterest size={25} />
            </a>
            <a href='#'>
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
