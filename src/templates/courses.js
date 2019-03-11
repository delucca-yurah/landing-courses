import React from 'react'
import { graphql } from "gatsby"
import { pick } from 'lodash'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Video from '../components/video'
import Description from '../components/description'
import ScrollTop from '../components/scrollTop'
import Market from '../components/market'
import Author from '../components/author'
import Float from '../components/float'
import Yurah from '../components/yurah'
import background from '../images/background-video.mp4'

const IndexPage = ({ data }) => {
  const course = pick(data.coursesJson, ['courseId', 'title', 'price'])

  return(
    <Layout background={ background }>
      <SEO
        title={ data.coursesJson.metadata.title }
        description={ data.coursesJson.metadata.description }
        author={ data.coursesJson.author }
        url={ data.coursesJson.metadata.url }
        slug={ data.coursesJson.slug }
      />
      <Video video={ data.coursesJson.video } />

      <Description
        course={ course }
        author={ data.coursesJson.author.name }
        description={ data.coursesJson.description }
        topics={ data.coursesJson.topics }
      />

      <ScrollTop />

      <Market
        market={ data.coursesJson.market }
        salary={ data.coursesJson.salary }
      />

      <Author
        course={ course }
        name={ data.coursesJson.author.name }
        bio={ data.coursesJson.author.bio }
      />

      <Float
        course={ course }
        slug={ data.coursesJson.slug }
      />

      <Yurah />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query CourseQuery ($id: String!) {
    coursesJson(id: { eq: $id }) {
      courseId,
      title,
      slug,
      description,
      topics,
      market,
      salary,
      price {
        original,
        promotional,
        currency
      },
      author {
        name,
        bio
      },
      video {
        id
      },
      metadata {
        title,
        description,
        keywords,
        url
      }
    }
  }
`
