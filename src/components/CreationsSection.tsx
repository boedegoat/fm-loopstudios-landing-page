export default function CreationsSection() {
  return (
    <section className='wrapper text-center lg:text-left'>
      <div className='lg:flex lg:items-center lg:justify-between'>
        <h2 className='uppercase font-josefin text-3xl lg:text-4xl'>Our creations</h2>
        <a href='#' className='creation-see-all hidden lg:inline-block'>
          see all
        </a>
      </div>
      <div className='mt-10 space-y-6 lg:flex lg:flex-wrap lg:gap-6 lg:space-y-0'>
        <a href='#' className='creation-item bg-img-deep-earth-mobile lg:bg-img-deep-earth-desktop'>
          <p>
            deep <br /> earth
          </p>
        </a>
        <a
          href='#'
          className='creation-item bg-img-night-arcade-mobile lg:bg-img-night-arcade-desktop'
        >
          <p>
            night <br /> arcade
          </p>
        </a>
        <a
          href='#'
          className='creation-item bg-img-soccer-team-mobile lg:bg-img-soccer-team-desktop'
        >
          <p>
            soccer <br /> team vr
          </p>
        </a>
        <a href='#' className='creation-item bg-img-grid-mobile lg:bg-img-grid-desktop'>
          <p>
            the <br /> grid
          </p>
        </a>
        <a href='#' className='creation-item bg-img-from-above-mobile lg:bg-img-from-above-desktop'>
          <p>
            from up <br /> above vr
          </p>
        </a>
        <a
          href='#'
          className='creation-item bg-img-pocket-borealis-mobile lg:bg-img-pocket-borealis-desktop'
        >
          <p>
            pocket <br /> borealis
          </p>
        </a>
        <a href='#' className='creation-item bg-img-curiosity-mobile lg:bg-img-curiosity-desktop'>
          <p>
            the <br /> curiosity
          </p>
        </a>
        <a href='#' className='creation-item bg-img-fisheye-mobile lg:bg-img-fisheye-desktop'>
          <p>
            make it <br /> fisheye
          </p>
        </a>
      </div>
      <a href='#' className='creation-see-all inline-block lg:hidden mt-8 '>
        see all
      </a>
    </section>
  )
}
