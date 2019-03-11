import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './images/logo'
import Menu from './menu'
import styles from './styles/header.module.scss'

const Header = () => {
  const [active, toggleMenu] = useState(false)

  return (
    <header className={ styles.header }>
      <div className={ styles.headerWrapper }>
        <a href={ process.env.GATSBY_HOME }>
          <Logo />
        </a>

        <Menu active={ active } />

        <div className={ styles.mobileToggler }>
          <FaBars
            className={ `${ styles.mobileOpen } ${ active && styles.inactiveMobile }` }
            onClick={ () => toggleMenu(true) }
          />

          <FaTimes
            className={ `${ styles.mobileClose } ${ active && styles.activeMobile }` }
            onClick={ () => toggleMenu(false) }
          />
        </div>
      </div>
    </header>
  )
}

export default Header
