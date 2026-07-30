import './App.css'
import Clock from './components/Clock'

function App() {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1>Task Timer</h1>
        <Clock />
      </div>
    </div>
  )
}

export default App
