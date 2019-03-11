import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styles from './styles/menu.module.scss'

const Menu = ({ active }) => (
  <StaticQuery
    query={graphql`
      query {
        allMenuJson {
          edges {
            node {
              id
              item
              destination
            }
          }
        }
      }
    `}
    render={
      data =>
        <nav className={ `${ styles.nav } ${ active && styles.activeNav }` }>
          <ul>
            {
              data.allMenuJson.edges.map(({ node }) =>
                <a key={ `menu-${ node.id }` } href={ node.destination }>
                  <li>{ node.item }</li>
                </a>
              )
            }
          </ul>
        </nav>
    }
  />
)

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default Menu
