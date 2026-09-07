
import { Suspense} from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/Nav'
import Players from './Components/Players/Players'
import type { PlayersType } from './Components/Type/PlayersType'

const playersDataPromise: () => Promise<PlayersType[]> = async () => {
  const response = await fetch('/data.json')
  const data = await response.json()
  return data;
}


function App() {

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback={<div>Loading...</div>}>
        <Players playersDataPromise={playersDataPromise()}></Players>
      </Suspense>
    </>
  )
}

export default App
