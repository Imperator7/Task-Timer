import { useContext } from 'react'
import { ClockContext } from '../contexts/ClockContext'

export function useClock() {
  const context = useContext(ClockContext)
  if (!context) {
    throw new Error('can use this context only under the ClockProvider')
  }

  return context
}
