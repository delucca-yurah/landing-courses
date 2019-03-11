import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/background.module.scss'

const Background = ({ url }) => (
  <video id="background-video" loop autoPlay className={ styles.bg }>
    <source src={ url } type="video/mp4" />
  </video>
)

Background.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Background
