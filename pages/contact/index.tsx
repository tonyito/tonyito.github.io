import { GetStaticProps } from 'next'
import Link from 'next/link'

import { User } from '../../interfaces'
import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
// import List from '../../components/List'


const WithStaticProps = () => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Contact Tony</h1>
    <p>
      My email is <code>tonyitocole@gmail.com</code>.
    </p>
    <p>You are currently on a test page</p>
    {/* <List items={items} /> */}
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps
