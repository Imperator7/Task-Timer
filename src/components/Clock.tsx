import { useClock } from '../hooks/useClock'

const Clock = () => {
  const clock = useClock()

  const time = clock.time.toLocaleTimeString()
  return (
    <div>
      <div>{time}</div>
    </div>
  )
}
export default Clock
