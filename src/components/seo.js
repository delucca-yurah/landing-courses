import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title, url, slug, noindex=false }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const cover = require(`../images/covers/${ slug ? slug : 'default' }.jpg`)

        const metaDescription =
          description || data.metadata.siteMetadata.description

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.metadata.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: url,
              },
              {
                property: `og:image`,
                content: cover,
              },
              {
                property: `og:url`,
                content: url,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.metadata.siteMetadata.author.name,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: 'robots',
                content: noindex ? 'noindex, follow' : 'index, follow'
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `pt_BR`,
  title: `Cursos por Whatsapp - Aprenda personalizado para você`,
  description: "",
  meta: [],
  keywords: [`curso`, `whatsapp`, `ead`, `aprender`, `ensino`, `curso por whatsapp`],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  noindex: PropTypes.bool,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    metadata: site {
      siteMetadata {
        title
        description
        author {
          name
        }
        url
      }
    }
  }
`
