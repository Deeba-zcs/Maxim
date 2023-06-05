
import Maxim from './Home-banner/page'
import Portfolio from './Portfolio/page'
import Section3 from './Section3/page'
import Testimonials from './Testimonials/page'
import Services from './services/page'
import Team from './team/page'
import Contact from './contact/page'
import Page from './Trials/page'

export default function Home() {
  return (
    <div>
      <Maxim/>
      <Section3/>
      <Services/>
      <Portfolio/>
      <Team/>
      {/* <Page /> */}
      <Testimonials/>
      <Contact />

    </div>
  )
}
