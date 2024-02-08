import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm following a Gatsby tutorial.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage