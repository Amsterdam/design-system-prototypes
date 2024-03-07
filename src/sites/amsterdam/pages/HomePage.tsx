import { CityOfficesClosed } from '../components/home/CityOfficesClosed.tsx'
import { CurrentAffairs } from '../components/home/CurrentAffairs'
import { Highlights } from '../components/home/Highlights'
import { Search } from '../components/home/Search'
import { TopTasks } from '../components/home/TopTasks'

export const HomePage = () => (
  <>
    <CityOfficesClosed />
    <Search />
    <TopTasks />
    <Highlights />
    <CurrentAffairs />
  </>
)
