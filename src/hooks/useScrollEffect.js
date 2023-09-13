import { useState, useEffect } from 'react'

const useScrollEffect = (id, offset, offsetOff) => {
 const [scrolled, setScrolled] = useState(false)  
  
  useEffect(() => {
    let rafId = null

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      const container = document.getElementById(id)

        rafId = requestAnimationFrame(() => {
          const currentOffset = window.pageYOffset
          
          if (Math.floor(currentOffset) >= container.offsetTop - offset && !scrolled) setScrolled(true)
          else if (Math.floor(currentOffset) < container.offsetTop - offsetOff && scrolled) setScrolled(false)
        })
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll);
    }
  }, [scrolled, id, offset, offsetOff]) 

  return { scrolled }
}

export default useScrollEffect
