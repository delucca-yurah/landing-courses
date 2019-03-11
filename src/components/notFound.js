import React from 'react'
import Back from './buttons/back'
import styles from './styles/notFound.module.scss'

const NotFound = () => (
  <section id="not-found" className={ styles.notFound }>
    <div>
      <span className={ styles.emojis } role="img" aria-label="Emoticon curioso">🤔</span>

      <p>
        <strong>Essa página não foi encontrada</strong>. Se você quiser
        ir para nosso site e ver todos os cursos que temos, é só clicar no botão abaixo <span role="img" aria-label="Emoticon de um sorriso">😁</span>
      </p>

      <Back text="Ir para a home" url={ process.env.GATSBY_HOME } />
    </div>
  </section>
)

export default NotFound
