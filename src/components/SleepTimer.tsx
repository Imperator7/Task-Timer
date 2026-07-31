import { useContext, useEffect, useState } from 'react'
import { ClockContext } from '../contexts/ClockContext'

const SleepTimer = () => {
  const [sleepTime, setSleepTime] = useState<string>(() => {
    return localStorage.getItem('sleepTime') ?? ''
  })

  const time = useContext(ClockContext)?.time ?? new Date()

  useEffect(() => {
    localStorage.setItem('sleepTime', sleepTime)
  }, [sleepTime])

  const [hours, minutes] = sleepTime.split(':').map(Number)
  const tonightSleepTimeTarget = new Date()
  tonightSleepTimeTarget.setHours(hours, minutes, 0, 0)

  const getHoursMinsLeft = (sleepTime: Date): [number, number] => {
    const timeLeft = sleepTime.getTime() - time.getTime()

    if (timeLeft <= 0) return [0, 0]

    const totalMins = Math.floor(timeLeft / 60000)

    const hours = Math.floor(totalMins / 60)
    const minutes = totalMins % 60

    return [hours, minutes]
  }

  const timeToSleep = tonightSleepTimeTarget
  const [hoursTillSleepTime, minutesTillSleepTime] =
    getHoursMinsLeft(timeToSleep)

  return (
    <div className="bg-cyan-200 px-4 py-2 rounded text-grey-500 font-semibold inline-block">
      <div className="flex gap-2">
        <h3>sleeps at</h3>
        <input
          type="time"
          value={sleepTime}
          onChange={(e) => {
            setSleepTime(e.target.value)
          }}
        />
      </div>
      {hoursTillSleepTime !== 0 && minutesTillSleepTime !== 0 ? (
        <div className="flex gap-2 items-baseline">
          <div className="flex gap-1 text-xl text-blue-800">
            <p>{hoursTillSleepTime} hrs</p>
            <p>{minutesTillSleepTime} mins</p>
          </div>
          <h3>left till sleep</h3>
        </div>
      ) : (
        <div>
          <p>It's already the sleeping time</p>
        </div>
      )}
    </div>
  )
}
export default SleepTimer
