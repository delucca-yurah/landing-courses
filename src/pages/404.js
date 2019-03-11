import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NotFound from '../components/notFound'
import background from '../images/background-video.mp4'

const PageNotFound = () => (
  <Layout background={ background }>
    <SEO
      title={ 'Página não encontrada' }
      description={ 'Epa 🤔 Parece que você tentou acessar uma página que não existe ' }
      url={ 'https://yurah.com.br/404' }
      noindex={ true }
    />

    <NotFound />
  </Layout>
)

export default PageNotFound
