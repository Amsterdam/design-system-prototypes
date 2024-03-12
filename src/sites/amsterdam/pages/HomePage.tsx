import { Paragraph } from '@amsterdam/design-system-react'
import { CurrentAffairs } from '../components/home/CurrentAffairs'
import { Highlights } from '../components/home/Highlights'
import { Search } from '../components/home/Search'
import { SiteWideAlert } from '../components/home/SiteWideAlert'
import { TopTasks } from '../components/home/TopTasks'

export const HomePage = () => (
  <>
    <SiteWideAlert>
      <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid aspernatur modi, omnis quam vitae. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet
        bereikbaar.
      </Paragraph>
    </SiteWideAlert>
    <Search />
    <TopTasks />
    <Highlights />
    <CurrentAffairs />
  </>
)
