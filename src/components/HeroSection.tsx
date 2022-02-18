import { forwardRef } from 'react'

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className='hero-section'>
      <div className='wrapper h-full'>
        <h1 className='uppercase translate-y-56 text-4xl lg:text-7xl max-w-[648px] font-josefin border p-5'>
          immersive experience <br /> that deliver
        </h1>
      </div>
    </section>
  )
})

export default HeroSection
