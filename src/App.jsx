import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'

import anonovo from './assets/anonovo.jpg'

import useCountdown from './hooks/useCounterdown'

function App() {
  const x = useCountdown("Jan 1, 2023 00:00:00")

  return (
    <div className='App' style={{background: `url(${anonovo})`}}>
      <div className="container">
        <Title Title="Contagem regressiva para 2024"/>
        <div className="countdown-container">
          <Counter Title="Dias" number={2}/>
          <Counter Title="Horas" number={2}/>
          <Counter Title="Minutos" number={2}/>
          <Counter Title="Segundos" number={2}/>
        </div>
      </div>
    </div>
  )
}

export default App
