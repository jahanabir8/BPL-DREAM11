
import { Suspense, useState} from 'react'
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

  const [coin, setCoin] = useState(100000)

  return (
    <>
      <Nav coin={coin}></Nav>
      <Hero></Hero>
      <Suspense fallback={<div>Loading...</div>}>
        <Players coin={coin} setCoin = {setCoin}  playersDataPromise={playersDataPromise()}></Players>
      </Suspense>
    </>
  )
}

export default App
