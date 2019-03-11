import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Error from '../components/error'
import background from '../images/background-video.mp4'

const Erro = () => (
  <Layout background={ background }>
    <SEO
      title={ 'Ops 😅. Parece que tivemos um problema' }
      description={ 'Desculpe 🤕 parece que tivemos um probleminha aqui em nosso site. Tente novamente depois, tudo bem?' }
      url={ 'https://yurah.com.br/erro' }
      noindex={ true }
    />

    <Error />
  </Layout>
)

export default Erro
