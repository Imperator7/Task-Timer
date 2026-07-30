import { createContext } from 'react'

type ClockContextType = {
  time: Date
}

export const ClockContext = createContext<ClockContextType | null>(null)
