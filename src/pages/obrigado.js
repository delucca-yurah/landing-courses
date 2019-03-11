import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ThankYou from '../components/thankYou'
import background from '../images/background-video.mp4'

const Obrigado = () => (
  <Layout background={ background }>
    <SEO
      title={ 'Obrigado por comprar nosso curso por WhatsApp' }
      description={ 'Eba 🎉🎉🎉 Você acabou de comprar nosso curso por WhatsApp! Muito obrigado 😀, agora é só aguardar o curso começar.' }
      url={ 'https://yurah.com.br/obrigado' }
    />

    <ThankYou />
  </Layout>
)

export default Obrigado
