import * as React from 'react';
import Head from 'next/head';
import Link from '@material-ui/core/Link';

type Props = {
  title?: string;
  setJpn?: any;
  jpn?: boolean;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
  setJpn,
  jpn
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href='/about'>
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href='/contact'>
          <a>Contact</a>
        </Link>{' '}
        | {!jpn && <Link onClick={() => setJpn(!jpn)}><a>日本語</a></Link>}{' '}
        {jpn && <Link onClick={() => setJpn(!jpn)}><a>English</a></Link>}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
