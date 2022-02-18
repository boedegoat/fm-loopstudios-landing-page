import { useEffect, useRef, useState } from 'react'

export default function useObserver(options?: IntersectionObserverInit) {
  const element = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    }, options)
    if (element?.current) {
      observer.observe(element.current)
    }
  }, [])

  return [element, visible] as [React.RefObject<HTMLElement>, boolean]
}
