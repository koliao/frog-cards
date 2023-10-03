import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Timer from './components/Timer/Timer'

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(60*60 - 1);

  setTimeout(() => setSeconds(seconds - 1), 1000);

  return (
    <div className="mainContainer">
      <Timer
        secondsLeft={seconds}
      />
      <div className="card">
        <Card
          commonName="Dessert rain frog"
          scientificName="Breviceps macrops"
          imgSrc="https://factanimal.com/wp-content/uploads/2023/02/desert-rain-frog-facts.jpg"
          info="The desert rain frog is a plump species with bulging eyes, a short snout, short limbs, spade-like feet, and webbed toes"
        />
        <Card
          commonName="Dessert rain frog"
          scientificName="Breviceps macrops"
          imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffree4kwallpapers.com%2Fuploads%2Foriginals%2F2016%2F02%2F16%2Fbeautiful-tree-frog-wallpaper.jpg&f=1&nofb=1&ipt=4d1e6bc6d1d6790609f4ba076c533bacfa8a9b800caf1a9318bae35d888821f4&ipo=images"
          info="The desert rain frog is a plump species with bulging eyes, a short snout, short limbs, spade-like feet, and webbed toes"
        />
        <Card
          commonName="Dessert rain frog"
          scientificName="Breviceps macrops"
          imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.C55ho0rr26-BvulReMhO1AHaE8%26pid%3DApi&f=1&ipt=8f629c20b738d6559d95fbf30bbd71e4e0896b18a00a2fbe6a8b3a94eeaae3bf&ipo=images"
          info="The desert rain frog is a plump species with bulging eyes, a short snout, short limbs, spade-like feet, and webbed toes"
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
