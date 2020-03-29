import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Resume</h1>
    <p>Link to Resume will go here once ready.</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
