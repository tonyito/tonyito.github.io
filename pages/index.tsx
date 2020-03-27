import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = ({jpn, setJpn} : {jpn: boolean, setJpn: any}) => {

return (
  <div>
  {!jpn &&
  <Layout title="Home" setJpn={setJpn} jpn={jpn}>
    <h1>Welcome to Tony's site! 👋</h1>
    <p>
      <Link href="/about">
        <div>
        <a>'Hello!'</a>
        </div>
      </Link>
    </p>
  </Layout>
}

{jpn &&   <Layout title="Home" setJpn={setJpn} jpn={jpn}>
    <h1>トニーのサイトへようこそ！! 👋</h1>
    <p>
      <Link href="/about">
        <div>
        <a>'こんにちは！'</a>
        </div>
      </Link>
    </p>
  </Layout>}
</div>
)
}

export default IndexPage
