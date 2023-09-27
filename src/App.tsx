import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
          imgSrc="https://factanimal.com/wp-content/uploads/2023/02/desert-rain-frog-facts.jpg"
          info="The desert rain frog is a plump species with bulging eyes, a short snout, short limbs, spade-like feet, and webbed toes"
        />
        <Card
          commonName="Dessert rain frog"
          scientificName="Breviceps macrops"
          imgSrc="https://factanimal.com/wp-content/uploads/2023/02/desert-rain-frog-facts.jpg"
          info="The desert rain frog is a plump species with bulging eyes, a short snout, short limbs, spade-like feet, and webbed toes"
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
