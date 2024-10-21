import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'
import NewYear from './assets/NewYear.webp'
import UseCountdown from './hooks/UseCountdown'


function App() {
  const [day, hour, minute, second] = UseCountdown("jan 1, 2025 00:00:00")
 
  return (
      <div className="App" style={{backgroundImage: `url(${NewYear})`}}>
        <div className="container">
          <Title title="contagem regressiva para 2025"/>
          <div className="countdown_container">
          <Counter title="dias" number={day} />
          <Counter title="horas" number={hour} />
          <Counter title="minutos" number={minute} />
          <Counter title="segundos" number={second} />
          </div>
        </div>
      </div>
  )
}

export default App
