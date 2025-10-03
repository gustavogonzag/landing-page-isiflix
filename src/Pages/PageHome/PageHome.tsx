import ScrollToTop from '../../Utils/ScrollToTop'
import HeroSection from '../HeroSection/HeroSection'
import MethodsSession from '../MethodsSession/MethodsSession'
import OurPlansSession from '../OurPlanesSession/OurPlansSession'
import PlayerSection from '../PlayerSection/PlayerSection'
import TopicsSession from '../TopicsSession/TopicsSession'
import YouReadySession from '../YouReadySession/YouReadySession'

function PageHome() {
  return (
    <div className='flex flex-col justify-center'>
      <HeroSection />
      <PlayerSection />
      <TopicsSession />
      <MethodsSession />
      <OurPlansSession />
      <YouReadySession />
      <ScrollToTop />
    </div>
  )
}

export default PageHome