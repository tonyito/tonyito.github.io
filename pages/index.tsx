import Link from '@material-ui/core/Link';
import Layout from '../components/Layout';
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

const IndexPage = ({ jpn, setJpn }: { jpn: boolean; setJpn: any }) => {
  const classes = useStyles();
  const data = {
    reactype: {
      title: `ReacType`,
      content: `ReacType allows the user to visualize their application architecture dynamically, employing a canvas display, an application tree, and a real-time component code preview. The user can create components and load instances of these components, as well as nested HTML elements, onto the canvas. This architecture can then be exported as TypeScript application files to be used as a starter template for any repository.`,
      imageSource: `/images/reactype.png`,
      url: `https://reactype.io/`
    }, 
    compost: {
      title: `Compost`,
      content: `Compost is a Pastebin influenced travel checklist application with a private url generator. The uuidv4 generated url allows users to avoid the hassle of the sign up process when creating a list that can be tossed once the event is over.`,
      imageSource: `/images/compost.png`,
      url: `https://github.com/compost-io/Compost`
    }, 
    polobot: {
      title: `Polobot`,
      content: `Polobot is an email notifier for the Poloniex cryptocurrency exchange written in Python that pulls data from the Poloniex API to send the user email notifications when buy and sell orders were fulfilled.`,
      imageSource: `/images/poloniex.jpg`,
      url: `https://github.com/tonyito/Polobot`
    }, 
    isi: {
      title: `Intrinsic Signal Imaging Software`,
      content: `The MATLAB ISI code in Ed Callaway's lab was updated to properly function with the upgraded 64-bit hardware and high resolution image capture devices on the behavior recording rig.
      The code allows researchers to run a visual stimulus suite built around the Psychophysics Toolbox. The visual stimulus interfaces with image acquisition code for a Matrox frame grabber, which calls Matrox libraries.`,
      imageSource: `/images/isi.png`,
      url: `https://sites.google.com/site/iannauhaus/home/matlab-code`
    }, 
    segmentation: {
      title: `Visual Area Segmentation Program`,
      content: `The updated codebase for visual area segmentation properly now fits the resolution of retinotopic maps generated by the ISI code in Ed Callaway's lab upon upgrading to new image capture devices.
      This original program allowed researchers to input retinotopic maps and output a set of discrete patches, like in Garrett et al J. Neurosci 2014.`,
      imageSource: `/images/segmentation.png`,
      url: `https://sites.google.com/site/iannauhaus/home/visual-area-segmentation`
    }, 
    counter: {
      title: `Fluorecent Cell Detection Algorithm`,
      content: `Lightweight code that takes the heavy weight off of a life science researcher’s shoulder by automating a very tiring task: fluorescent-dyed cell counting. This code allows any user to automate cell counting on an image by simply adjusting for brightness and eccentricity. Written in Python using the OpenCV computer vision library.`,
      imageSource: `/images/cells.jpg`,
      url: `http://callaway.salk.edu`
    }
  };

  return (
    <div>
      <Container maxWidth='xl'>
        {!jpn && (
          <Layout title='Home' setJpn={setJpn} jpn={jpn}>
            <Typography>
              <h1>Tony Ito-Cole</h1>
                <div style={{ marginBottom: '20px', marginTop: '-20px', color: '#808080' }}>
                  Software Engineer. Los Angeles, CA. Here are some of my projects.
                </div>
            </Typography>
          </Layout>
        )}

        {jpn && (
          <Layout title='Home' setJpn={setJpn} jpn={jpn}>
            <h1>トニーのサイトへようこそ！! 👋</h1>
            <p>
              <Link href='/about'>
                <div>
                  <a>こんにちは！</a>
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
            title={data.reactype.title}
            content={data.reactype.content}
            imageSource={data.reactype.imageSource}
            url={data.reactype.url}
          />
          <CardContainer
            jpn={jpn}
            title={data.compost.title}
            content={data.compost.content}
            imageSource={data.compost.imageSource}
            url={data.compost.url}
          />
          <CardContainer
            jpn={jpn}
            title={data.polobot.title}
            content={data.polobot.content}
            imageSource={data.polobot.imageSource}
            url={data.polobot.url}
          />
        </Grid>
        <Grid container spacing={3}>
          <CardContainer
            jpn={jpn}
            title={data.isi.title}
            content={data.isi.content}
            imageSource={data.isi.imageSource}
            url={data.isi.url}
          />
          <CardContainer
            jpn={jpn}
            title={data.segmentation.title}
            content={data.segmentation.content}
            imageSource={data.segmentation.imageSource}
            url={data.segmentation.url}
          />
          <CardContainer
            jpn={jpn}
            title={data.counter.title}
            content={data.counter.content}
            imageSource={data.counter.imageSource}
            url={data.counter.url}
          />
        </Grid>
      </Container>
      <Container className={classes.footer}>
        <Typography>Built with React and Nextjs, written in TypeScript. Feel free to use my template <Link href='https://github.com/tonyito/tonyito.github.io'>here!</Link></Typography>
      </Container>
    </div>
  );
};

export default IndexPage;
