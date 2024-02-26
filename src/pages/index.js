import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const Static = () => {}

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm following a Gatsby tutorial.</p>
      <StaticImage
        alt="Kakshi with double mangekyo sharingan"
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/kamui_lightning_cutter.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage