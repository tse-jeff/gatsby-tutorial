import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <h1>This is a Gatsby.js Tutorial site!</h1>
      <Link to='/about'>About</Link>
      <p>I'm following a Gatsby tutorial.</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage