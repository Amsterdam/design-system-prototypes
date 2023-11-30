import { Search } from '../../components/amsterdam.nl/home/Search'
import { TopTasks } from '../../components/amsterdam.nl/home/TopTasks'
import { Highlights } from '../../components/amsterdam.nl/home/Highlights'
import { CurrentAffairs } from '../../components/amsterdam.nl/home/CurrentAffairs'

export default function Home() {
  return (
    <>
      <Search />
      <TopTasks />
      <Highlights />
      <CurrentAffairs />
    </>
  )
}
