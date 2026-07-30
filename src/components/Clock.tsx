import { useEffect, useState } from 'react'

const Timer = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const timeString = time.toLocaleTimeString()

  return (
    <div>
      <div>{timeString}</div>
    </div>
  )
}
export default Timer
