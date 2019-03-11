import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade';
import Buy from './buttons/buy'
import { paragraphBuilder } from './layout'
import styles from './styles/author.module.scss'

const Author = ({ course, name, bio }) => (
  <section id="author" className={ styles.author }>
    <Fade right>
      <div>
        <h2>{ name }</h2>

        { paragraphBuilder(bio) }
      </div>
    </Fade>

    <Buy course={ course } />
  </section>
)

Author.propTypes = {
  course: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
}

export default Author
