import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './thumbnails.module.scss'

const ThumbGrowthHacking = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "thumbs/growth-hacking.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 238, maxHeight: 238) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={ data => <Img className={ styles.thumbnail } fluid={ data.placeholderImage.childImageSharp.fluid } /> }
  />
)
export default ThumbGrowthHacking
