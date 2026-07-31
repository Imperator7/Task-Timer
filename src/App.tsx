import './App.css'
import Clock from './components/Clock'
import { ClockProvider } from './contexts/ClockProvider'
import TaskList from './components/TaskList'
import SleepTimer from './components/SleepTimer'
import MileStone from './components/MileStone'

function App() {
  return (
    <ClockProvider>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between  bg-gray-300 p-4 font-semibold">
          <h1>Task Timer</h1>
          <Clock />
        </div>
        <div className="flex justify-between p-4 ">
          <div>
            <MileStone />
            <TaskList />
          </div>
          <div>
            <SleepTimer />
          </div>
        </div>
      </div>
    </ClockProvider>
  )
}

export default App
