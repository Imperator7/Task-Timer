import './App.css'
import Clock from './components/Clock'
import { ClockProvider } from './contexts/ClockProvider'

function App() {
  return (
    <ClockProvider>
      <div className="p-4">
        <div className="flex justify-between">
          <h1>Task Timer</h1>
          <Clock />
        </div>
      </div>
    </ClockProvider>
  )
}

export default App
