import { useState } from 'react'
//import './App.css'

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)


  return (
    <div>
      <h1>Giveme feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad+1)}>Bad</button>
      <h1>statics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {good+neutral+bad}</p>
      <p>average: {(good-bad)/(good+neutral+bad)}</p>
      <p>positive: {(good/(good+neutral+bad))*100}%</p>

    </div>   
  )
}

export default App
