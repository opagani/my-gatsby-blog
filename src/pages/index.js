import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my blog!</p>
      <StaticImage
        alt="A cute pug"
        src="https://media.gettyimages.com/photos/puk-pukster-picture-id157382116?k=6&m=157382116&s=612x612&w=0&h=CsV75H5DXgMiVqqC2U5bXjHy-UK0R2o6OTY9PG08BM8="
      />
    </Layout>
  )
}

export default IndexPage