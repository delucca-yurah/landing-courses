import React, { useState } from 'react'
import { window, exists } from 'browser-monads';
import { animateScroll as scroll } from 'react-scroll'
import { FaChevronUp } from 'react-icons/fa';
import styles from './styles/scrollTop.module.scss'

const ScrollTop = () => {
  const [visible, setVisibility] = useState(false)
  const breakpoint = 600

  if(exists(window))
    window.addEventListener('scroll', () =>
      !visible && window.scrollY > breakpoint
      && setVisibility(true)
    )

  return (
    <aside
      id="scroll-top"
      onClick={ scroll.scrollToTop }
      className={ `${ styles.scrollTop } ${ visible && styles.visible }` }
    >
      <span>
        <FaChevronUp />
      </span>
    </aside>
  )
}

export default ScrollTop
