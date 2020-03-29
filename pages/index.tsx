import Link from 'next/link';
import Layout from '../components/Layout';
import CardContainer from '../components/CardContainer';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const IndexPage = ({ jpn, setJpn }: { jpn: boolean; setJpn: any }) => {
  const data = {
    lizard: {
      title: `Lizard`,
      content: `Lizards are a widespread group of squamate reptiles, with
      over 6,000 species, ranging across all continents except
      Antarctica`,
      imageSource: `/images/contemplative-reptile.jpg`,
      url: `http://www.reptiles.com`
    }
  };

  return (
    <div>
      <Container maxWidth='xl'>
        {!jpn && (
          <Layout title='Home' setJpn={setJpn} jpn={jpn}>
            <Typography>
              <h1>Tony Ito-Cole</h1>
              <p>
                <Link href='/about'>
                  <div>
                    <a>Hello!</a>
                  </div>
                </Link>
              </p>
            </Typography>
          </Layout>
        )}

        {jpn && (
          <Layout title='Home' setJpn={setJpn} jpn={jpn}>
            <h1>トニーのサイトへようこそ！! 👋</h1>
            <p>
              <Link href='/about'>
                <div>
                  <a>'こんにちは！'</a>
                </div>
              </Link>
            </p>
          </Layout>
        )}
      </Container>
      <Container>
        <Grid container spacing={3}>
          <CardContainer
            jpn={jpn}
            title={data.lizard.title}
            content={data.lizard.content}
            imageSource={data.lizard.imageSource}
            url={data.lizard.url}
          />
          <CardContainer
            jpn={jpn}
            title={data.lizard.title}
            content={data.lizard.content}
            imageSource={data.lizard.imageSource}
            url={data.lizard.url}
          />
          <CardContainer
            jpn={jpn}
            title={data.lizard.title}
            content={data.lizard.content}
            imageSource={data.lizard.imageSource}
            url={data.lizard.url}
          />
        </Grid>
        <Grid container spacing={3}>
          <CardContainer
            jpn={jpn}
            title={data.lizard.title}
            content={data.lizard.content}
            imageSource={data.lizard.imageSource}
            url={data.lizard.url}
          />
          <CardContainer
            jpn={jpn}
            title={data.lizard.title}
            content={data.lizard.content}
            imageSource={data.lizard.imageSource}
            url={data.lizard.url}
          />
          <CardContainer
            jpn={jpn}
            title={data.lizard.title}
            content={data.lizard.content}
            imageSource={data.lizard.imageSource}
            url={data.lizard.url}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default IndexPage;
