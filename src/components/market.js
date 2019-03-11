import React from 'react'
import PropTypes from 'prop-types'
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import { paragraphBuilder } from './layout'
import styles from './styles/market.module.scss'

const Market = ({ market, salary }) => (
  <Parallax
    bgImage={require('../images/background-market.jpg')}
    bgImageAlt="Um grupo de pessoas em um escritório"
    strength={400}
  >
    <section id="market" className={ styles.market }>
      <Fade right>
        <div className={ styles.marketContent }>
          <h2>Mercado</h2>

          { paragraphBuilder(market) }
          { paragraphBuilder(salary) }
        </div>
      </Fade>
    </section>
  </Parallax>
)

Market.propTypes = {
  market: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
}

export default Market
