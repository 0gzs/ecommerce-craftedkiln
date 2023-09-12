import { useState, useEffect } from 'react'

const useScrollEffect = (offsetAmount) => {
  const [scrolled, setScrolled] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let rafId = null

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)

      rafId = requestAnimationFrame(() => {
        setOffset(window.pageYOffset)
      })
    }

    if (offset >= offsetAmount) setScrolled(true)
    else setScrolled(false)

    window.addEventListener('scroll', onScroll)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [offset, offsetAmount])

  return { scrolled }
}

export default useScrollEffect
