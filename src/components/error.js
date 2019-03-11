import React from 'react'
import Back from './buttons/back'
import styles from './styles/error.module.scss'

const Error = () => (
  <section id="error" className={ styles.error }>
    <div>
      <span className={ styles.emojis } role="img" aria-label="Emoticon de aviso">⚠️</span>

      <p>
        Parece que estamos com algum problema no nosso servidor <span role="img" aria-label="Emoticon suando">😅</span>
        Você pode tentar novamente mais tarde? Se ainda assim não funcionar, fale com a gente no <a href="https://www.facebook.com/timeyurah">Facebook</a>
      </p>

      <Back text="Voltar para a home" url={ process.env.GATSBY_HOME } />
    </div>
  </section>
)

export default Error
