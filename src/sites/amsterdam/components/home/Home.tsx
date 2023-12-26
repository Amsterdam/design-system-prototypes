import { CurrentAffairs } from './CurrentAffairs'
import { Highlights } from './Highlights'
import { Search } from './Search'
import { TopTasks } from './TopTasks'

export const Home = () => (
  <>
    <Search />
    <TopTasks />
    <Highlights />
    <CurrentAffairs />
  </>
)
