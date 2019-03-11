import React from 'react'
import PropTypes from 'prop-types'
import Buy from './buttons/buy'
import styles from './styles/float.module.scss'

const Float = ({ course, slug }) => {
  const Thumb = require(`./images/thumbnail-${ slug }`).default

  return(
    <aside id="float" className={ styles.float }>
      <Thumb />

      <h2>Curso de { course.title }</h2>

      <span className={ styles.lastPrice }>Preço anterior { course.price.original }</span>
      <h3>{ course.price.currency } { course.price.promotional }</h3>
      <span className={ styles.tag }>Preço da primeira turma <span role="img" aria-label="Emoticon de festa">🎉🎉🎉</span></span>

      <span className={ styles.included }>
        <h4>Incluso</h4>

        <ul>
          <li>Acesso vitalício ao conteúdo</li>
          <li>Mentoria personalizada</li>
          <li>Planejador de rotina de aprendizado</li>
          <li>Conteúdos enviado para seu WhatsApp</li>
          <li>Certificado de conclusão</li>
        </ul>
      </span>

      <Buy course={ course } />
    </aside>
  )
}

Float.propTypes = {
  course: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Float
