import React from 'react'
import PropTypes from 'prop-types'
import styles from './back.module.scss'

const Back = ({ url, text }) => (
  <button className={ styles.back } onClick={ () => window.location = url }>
    { text }
  </button>
)

Back.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Back
