import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to='/'>Back to Home</Link>
      <p>Hello, I'm Jeffery Tse, a CS alumni from NYU
        Tandon School of Engineering.
      </p>
    </main>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage