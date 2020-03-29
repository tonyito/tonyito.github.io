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

const IndexPage = ({
  jpn,
  setJpn
}: {
  jpn: boolean;
  setJpn: (arg: boolean) => void;
}) => {
  const classes = useStyles();
  const data = {
    reactype: {
      title: `ReacType`,
      content: `ReacType allows the user to visualize their application architecture dynamically, employing a canvas display, an application tree, and a real-time component code preview. The user can create components and load instances of these components, as well as nested HTML elements, onto the canvas. This architecture can then be exported as TypeScript application files to be used as a starter template for any repository.`,
      imageSource: `/images/reactype.png`,
      url: `https://reactype.io/`
    },
    reactypejp: {
      title: `ReacType`,
      content: `ReacTypeを使用するユーザーはキャンバス表示、アプリケーションツリー、そしてリアルタイムのコンポーネントコードプレビューを利用して、アプリケーションアーキテクチャを動的に視覚化できます。 ユーザーは、コンポーネントを作成し、コンポーネントのインスタンス、およびネストされたHTML要素をキャンバスにロードできます。 さらに、このアーキテクチャをTypeScriptアプリケーションファイルとしてエクスポートし、任意のリポジトリのスターターテンプレートとして使用できます。`,
      imageSource: `/images/reactype.png`,
      url: `https://reactype.io/`
    },
    compost: {
      title: `Compost`,
      content: `Compost is a Pastebin influenced travel checklist application with a private url generator. The uuidv4 generated url lets users avoid the hassle of creating an account, and instead allows for quick collaboration through a privately shared link.`,
      imageSource: `/images/compost.png`,
      url: `https://github.com/compost-io/Compost`
    },
    compostjp: {
      title: `Compost`,
      content: `Compostは、Pastebinに影響を受けた、プライベートURLジェネレーターを備えた旅行チェックリストアプリケーションです。 uuidv4で生成されたURLを使用すると、ユーザーはアカウントを作成する手間を省くことができ、代わりに非公開で共有されたリンクを介して迅速にコラボレーションできます。`,
      imageSource: `/images/compost.png`,
      url: `https://github.com/compost-io/Compost`
    },
    polobot: {
      title: `Polobot`,
      content: `Polobot is an email notifier for the Poloniex cryptocurrency exchange written in Python that makes secure API requests to send the user email notifications when buy and sell orders are fulfilled.`,
      imageSource: `/images/poloniex.jpg`,
      url: `https://github.com/tonyito/Polobot`
    },
    polobotjp: {
      title: `Polobot`,
      content: `Polobotは、Pythonで記述されたPoloniex暗号通貨交換の電子メール通知システムです。買い注文と売り注文が満たされたとき、ユーザーへ電子メール通知を送信するために安全なAPIリクエストを作成します。`,
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
    isijp: {
      title: `脳網膜地図キャプチャプログラム`,
      content: `Ed CallawayのラボのMATLAB ISIコードは、最新の64ビットハードウェアと高解像度画像キャプチャデバイスで適切に機能するように更新されました。このコードにより、研究者はPsychophysics Toolboxを中心に構築された視覚刺激スイートを実行できます。 視覚刺激は、Matroxライブラリを呼び出すMatroxフレームグラバーの画像取得コードと連動します。`,
      imageSource: `/images/isi.png`,
      url: `https://sites.google.com/site/iannauhaus/home/matlab-code`
    },
    segmentation: {
      title: `Visual Area Segmentation Program`,
      content: `The updated codebase for the visual area segmentation program properly fits the resolution of retinotopic maps generated by the ISI code in Ed Callaway's lab upon upgrading to new image capture devices.
      This original program allowed researchers to input retinotopic maps and output a set of discrete patches, like in Garrett et al J. Neurosci 2014.`,
      imageSource: `/images/segmentation.png`,
      url: `https://sites.google.com/site/iannauhaus/home/visual-area-segmentation`
    },
    segmentationjp: {
      title: `ビジュアルエリアセグメンテーションプログラム`,
      content: `新画像キャプチャデバイスへのアップグレードは、ビジュアルエリアセグメンテーションのコードベースが更新されたため、Ed CallawayのラボのISIコードから生成される脳網膜地図の解像度に適切に適合するようになりました。このプログラムはGarrett et al J. Neurosci 2014に書かれてるように、脳網膜地図のデータを入力すると個別のパッチのセットを出力される道具でした。`,
      imageSource: `/images/segmentation.png`,
      url: `https://sites.google.com/site/iannauhaus/home/visual-area-segmentation`
    },
    counter: {
      title: `Fluorecent Cell Detection Algorithm`,
      content: `Lightweight code that takes the heavy weight off of a life science researcher’s shoulder by automating a very tiring task: fluorescent-dyed cell counting. This code allows any user to automate cell counting on an image by simply adjusting for brightness and eccentricity. Written in Python using the OpenCV computer vision library.`,
      imageSource: `/images/cells.jpg`,
      url: `http://callaway.salk.edu`
    },
    counterjp: {
      title: `蛍光染色細胞自動カウントプログラム`,
      content: `蛍光染色された細胞のカウントを自動化する研究者の負担を軽減するプログラム。 このプログラムを使用すると、ユーザーは明るさと偏心を調整するだけで、画像上の細胞カウントを自動化できます。 OpenCVコンピュータービジョンライブラリを使用しするPythonで書かれたプログラムです。`,
      imageSource: `/images/cells.jpg`,
      url: `http://callaway.salk.edu`
    }
  };

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
                ? `Software Engineer in Los Angeles, CA. Here are some of the projects I've worked on.`
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
