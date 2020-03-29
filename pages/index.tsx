import Layout from '../components/Layout';
import { data } from '../public/data/data';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import CardContainer from '../components/CardContainer';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    },
    flexGrow: 1
  },
  footer: {
    float: 'left',
    marginTop: '20px',
    marginBottom: '20px'
  }
}));

const IndexPage = ({
  jpn,
  setJpn
}: {
  jpn: boolean;
  setJpn: (arg: boolean) => void;
}) => {
  const classes = useStyles();
  
  return (
    <div>
      <Container maxWidth='xl'>
        <Layout title='Home' setJpn={setJpn} jpn={jpn}>
          <Typography>
            <h1>{!jpn ? 'Tony Ito-Cole' : '伊藤コール翔兄'}</h1>
            <div
              style={{
                marginBottom: '20px',
                marginTop: '-20px',
                color: '#808080'
              }}>
              {!jpn
                ? `I'm a software engineer in Los Angeles, CA. Here are some of the projects I've worked on.`
                : 'ロサンゼルス在住ののソフトウェアエンジニア。以下のものは僕が取り組んできたプロジェクトのいくつかです。'}
            </div>
          </Typography>
        </Layout>
      </Container>
      <Container>
        <Grid container spacing={0}>
          <CardContainer
            title={!jpn ? data.reactype.title : data.reactypejp.title}
            content={!jpn ? data.reactype.content : data.reactypejp.content}
            imageSource={
              !jpn ? data.reactype.imageSource : data.reactypejp.imageSource
            }
            url={!jpn ? data.reactype.url : data.reactypejp.url}
            jpn={jpn}
          />
          <CardContainer
            title={!jpn ? data.compost.title : data.compostjp.title}
            content={!jpn ? data.compost.content : data.compostjp.content}
            imageSource={
              !jpn ? data.compost.imageSource : data.compostjp.imageSource
            }
            url={!jpn ? data.compost.url : data.compostjp.url}
            jpn={jpn}
          />
          <CardContainer
            title={!jpn ? data.polobot.title : data.polobotjp.title}
            content={!jpn ? data.polobot.content : data.polobotjp.content}
            imageSource={
              !jpn ? data.polobot.imageSource : data.polobotjp.imageSource
            }
            url={!jpn ? data.polobot.url : data.polobotjp.url}
            jpn={jpn}
          />
        </Grid>
        <Grid container spacing={0} >
          <CardContainer
            title={!jpn ? data.isi.title : data.isijp.title}
            content={!jpn ? data.isi.content : data.isijp.content}
            imageSource={!jpn ? data.isi.imageSource : data.isijp.imageSource}
            url={!jpn ? data.isi.url : data.isijp.url}
            jpn={jpn}
          />
          <CardContainer
            title={!jpn ? data.segmentation.title : data.segmentationjp.title}
            content={
              !jpn ? data.segmentation.content : data.segmentationjp.content
            }
            imageSource={
              !jpn
                ? data.segmentation.imageSource
                : data.segmentationjp.imageSource
            }
            url={!jpn ? data.segmentation.url : data.segmentationjp.url}
            jpn={jpn}
          />
          <CardContainer
            title={!jpn ? data.counter.title : data.counterjp.title}
            content={!jpn ? data.counter.content : data.counterjp.content}
            imageSource={
              !jpn ? data.counter.imageSource : data.counterjp.imageSource
            }
            url={!jpn ? data.counter.url : data.counterjp.url}
            jpn={jpn}
          />
        </Grid>
      </Container>
      <Container className={classes.footer}>
        {!jpn ? <Typography>
          Built with React and Nextjs, written in TypeScript. Feel free to use
          my template{' '}
          <Link href='https://github.com/tonyito/tonyito.github.io'>here!</Link>
        </Typography> : <Typography>
          ReactとNextjsを利用し、TypeScriptでこのサイトを作りました。このサイトのテンプレートを使用したい方は、<Link href='https://github.com/tonyito/tonyito.github.io'>ここ</Link>をクリック！          
        </Typography> }
      </Container>
    </div>
  );
};

export default IndexPage;
