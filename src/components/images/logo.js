import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './logo.module.scss'

const Logotipo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "yurah-logotipo.png" }) {
          childImageSharp {
            fluid(maxWidth: 120, maxHeight: 48) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={ data => <Img className={ styles.logo } fluid={ data.placeholderImage.childImageSharp.fluid } /> }
  />
)
export default Logotipo
