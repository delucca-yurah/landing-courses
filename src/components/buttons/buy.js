import React, { useState } from 'react'
import { window, exists } from 'browser-monads';
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import loader from './loader.svg'
import gateway from './buy.gateway'
import styles from './buy.module.scss'

const handlers = {
  success: () => navigate('/obrigado'),
  error: () => navigate('/erro'),
}

const Buy = ({ course }) => {
  const [pagarmeStatus, setPagarme] = useState(false)
  const checkPagarme = () => setTimeout(() =>
    /* global PagarMeCheckout */
    !PagarMeCheckout.Checkout
      ? checkPagarme()
      : !pagarmeStatus && setPagarme(true), 100)

  if(exists(window))
    checkPagarme()

  return (
    !pagarmeStatus
    ? <img className={ styles.loading } src={ loader } alt="Carregando" />
    : <button className={ styles.buy } onClick={ () => gateway(handlers, course) }>
        Quero aprender
      </button>
  )
}

Buy.propTypes = {
  course: PropTypes.object.isRequired,
}

export default Buy
