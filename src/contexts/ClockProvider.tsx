import { useEffect, useState } from 'react'
import { ClockContext } from './ClockContext'

export function ClockProvider({ children }: { children: React.ReactElement }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <ClockContext.Provider value={{ time }}>{children}</ClockContext.Provider>
  )
}
