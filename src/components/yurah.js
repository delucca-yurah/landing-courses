import React from 'react'
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import styles from './styles/yurah.module.scss'

const icons = {
  phone: require('../images/icons/phone.svg'),
  clock: require('../images/icons/clock.svg'),
  calendar: require('../images/icons/calendar.svg')
}

const Yurah = () => (
  <Parallax
    bgImage={require('../images/background-yurah.jpg')}
    bgImageAlt="Uma pessoa usando um celular"
    strength={400}
  >
    <section id="author" className={ styles.how }>
      <div className={ styles.howContent }>
        <Fade right>
          <h2>Como a Yurah funciona</h2>
        </Fade>

        <ul>
          <li className={ styles.howWhatsapp }>
            <Fade left>
              <img src={ icons.phone } alt="Ícone de um telefone" />
            </Fade>

            <Fade right>
              <h3>Todo o conteúdo é enviado em seu WhatsApp</h3>
              <p>
                Para cada aula, você receberá uma breve explicação (em texto ou vídeo) acompanhada de conteúdos
                da internet para se aprofundar e alguns exercícios. Nossa metodologia é testada e aprovada por
                grandes empresas, como <strong>Privália, HSM, Padtec e Unilever.</strong>
              </p>
            </Fade>
          </li>

          <li className={ styles.howAdaptative }>
            <Fade left>
              <img src={ icons.clock } alt="Ícone de um relógio" />
            </Fade>

            <Fade right>
              <h3>Nossos cursos se adaptam a sua rotina</h3>
              <p>
                Não temos plataformas complexas ou conteúdos densos. Facilitamos ao máximo para que você consiga
                aprender da melhor forma através de um curso que é estruturado de acordo com o seu perfil. Após
                o seu cadastro, iremos personalizar suas aulas através de algumas perguntas simples.
              </p>
            </Fade>
          </li>

          <li className={ styles.howDays }>
            <Fade left>
              <img src={ icons.calendar } alt="Ícone de um calendário" />
            </Fade>

            <Fade right>
              <h3>Você escolhe os dias que deseja estudar</h3>
              <p>
                Não temos grades ou horários fixos. Em nosso cadastro você irá escolher quais dias da semana e em
                qual período do dia você prefere receber suas aulas. Nosso sistema irá entender e organizar a sua
                rotina de estudos automaticamente. Dessa forma, conseguimos garantir que você não irá se esquecer
                ou ficar sem tempo para estudar com a gente.
              </p>
            </Fade>
          </li>
        </ul>
      </div>
    </section>
  </Parallax>
)
export default Yurah
