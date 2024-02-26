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
        src="../images/kamui.png"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage