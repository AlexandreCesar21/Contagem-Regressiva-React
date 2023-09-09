import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'

import anonovo from './assets/anonovo.jpg'

import useCountdown from './hooks/useCounterdown'

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2024 00:00:00")

  return (
    <div className='App' style={{background: `url(${anonovo})`}}>
      <div className="container">
        <Title Title="Contagem regressiva para 2024"/>
        <div className="countdown-container">
          <Counter Title="Dias" number={day}/>
          <Counter Title="Horas" number={hour}/>
          <Counter Title="Minutos" number={minute}/>
          <Counter Title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App
