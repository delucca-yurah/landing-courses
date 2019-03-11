import React from 'react'
import Back from './buttons/back'
import styles from './styles/thankYou.module.scss'

const ThankYou = () => (
  <section id="thank-you" className={ styles.thankYou }>
    <div>
      <span className={ styles.emojis } role="img" aria-label="Emoticon de festa">🎉🎉🎉</span>

      <h1>Obrigado</h1>
      <p>
        Você acabou de comprar seu curso! Agora é só aguardar que iremos falar
        com você lá mesmo pelo seu WhatsApp <span role="img" aria-label="Emoticon de um sorriso">😁</span>
      </p>

      <Back text="Voltar para a Home" url={ process.env.GATSBY_HOME } />
    </div>
  </section>
)

export default ThankYou
