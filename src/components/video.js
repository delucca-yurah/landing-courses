import React from 'react'
import PropTypes from 'prop-types'
import Youtube from 'react-youtube'
import styles from './styles/video.module.scss'

const Video = ({ video }) => (
  <section id="video" className={ styles.videoBg }>
    <div className={ styles.video }>
      <Youtube
        videoId={ video.id }
      />
    </div>
  </section>
)

Video.propTypes = {
  video: PropTypes.object.isRequired,
}

export default Video
