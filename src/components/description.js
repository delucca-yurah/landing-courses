import React from 'react'
import PropTypes from 'prop-types'
import cuid from 'cuid'
import Buy from './buttons/buy'
import { paragraphBuilder } from './layout'
import styles from './styles/description.module.scss'

const Description = ({ course, author, description, topics }) => (
  <section id="description" className={ styles.description }>
    <h1>
      <span>Curso por WhatsApp</span>
      { course.title }
    </h1>

    <small className={ styles.author }>
      por <a
        href="https://www.linkedin.com/in/julianom87/"
        target="_blank"
        rel="noopener noreferrer"> { author }</a>
    </small>

    { paragraphBuilder(description) }

    <h2>O que você irá aprender</h2>

    <ul>
      {
        topics.map(topic => <li key={ cuid() }>{ topic }</li>)
      }
    </ul>

    <Buy course={ course } />
  </section>
)

Description.propTypes = {
  course: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
}

export default Description
