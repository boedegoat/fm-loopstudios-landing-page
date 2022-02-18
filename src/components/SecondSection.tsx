import { ImageInteractiveDesktop, ImageInteractiveMobile } from '../images'

export default function SecondSection() {
  return (
    <div className='relative wrapper py-[122px]'>
      <img src={ImageInteractiveMobile} alt='image interactive' className='block lg:hidden' />
      <img src={ImageInteractiveDesktop} alt='image interactive' className='hidden lg:block' />
      <div className='text-center bg-white lg:absolute lg:bottom-14 lg:right-0 lg:max-w-xl lg:text-left lg:p-20'>
        <h2 className='uppercase font-josefin text-4xl mt-[62px] lg:mt-0 lg:text-5xl'>
          The leader in interactive VR
        </h2>
        <p className='text-dark-gray-100 mt-6 text-sm leading-relaxed'>
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for
          some of the best companies around the globe. Our award-winning creations have transformed
          businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </div>
  )
}
