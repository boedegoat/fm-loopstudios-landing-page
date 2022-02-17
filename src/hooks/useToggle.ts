import { useState } from 'react'

type Toggler = (value?: boolean | undefined) => void

export default function useToggle() {
  const [state, setState] = useState(false)
  const toggleState: Toggler = (value?: boolean) => {
    setState(value ?? !state)
  }
  return [state, toggleState] as [boolean, Toggler]
}
