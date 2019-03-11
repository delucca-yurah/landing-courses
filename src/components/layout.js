import React from 'react'
import PropTypes from 'prop-types'
import cuid from 'cuid'
import Header from './header'
import Background from './background'
import './styles/_main.scss'

export const paragraphBuilder = content =>
  content.split('\n').map(paragraph => <p key={ cuid() }>{ paragraph }</p>)

const Layout = ({ children, background }) => (
  <>
    <Header />

    { children }

    {
      background
      && <Background url={ background } />
    }
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
}

export default Layout
