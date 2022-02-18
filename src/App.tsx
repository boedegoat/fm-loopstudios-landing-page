import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SecondSection from './components/SecondSection'
import CreationsSection from './components/CreationsSection'
import Footer from './components/Footer'
import useObserver from './hooks/useObserver'

export default function App() {
  const [heroSectionRef, heroSectionVisible] = useObserver(true, { threshold: 0.7 })
  const changeNavStyle = !heroSectionVisible

  return (
    <>
      <main>
        <Navbar changeNavStyle={changeNavStyle} />
        <HeroSection ref={heroSectionRef} />
        <SecondSection />
        <CreationsSection />
      </main>
      <Footer />
    </>
  )
}
