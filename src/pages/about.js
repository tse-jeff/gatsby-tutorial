import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hello, I'm Jeffery Tse, a CS alumni from NYU
        Tandon School of Engineering.
      </p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage