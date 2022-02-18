import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SecondSection from './components/SecondSection'
import useObserver from './hooks/useObserver'

export default function App() {
  const [heroSectionRef, heroSectionVisible] = useObserver({ threshold: 0.7 })
  const changeNavStyle = !heroSectionVisible

  return (
    <main>
      <Navbar changeNavStyle={changeNavStyle} />
      <HeroSection ref={heroSectionRef} />
      <SecondSection />
    </main>
  )
}
