import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    flexGrow: 1,
  },
  pdf: {
    margin: "auto",
    marginTop: "50px",
    width: "50%",
  },
}));

const Resume = ({
  jpn,
  setJpn,
}: {
  jpn: boolean;
  setJpn: (arg: boolean) => void;
}) => {
  const classes = useStyles();

  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer: any) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  return (
    <Layout title="Resume | Tony Ito-Cole" setJpn={setJpn} jpn={jpn}>
      <Document
        file="/documents/resume.pdf"
        options={{
          cMapUrl: "../cmaps/",
          cMapPacked: true,
        }}
        renderMode="svg"
      >
        <Page
          className={classes.pdf}
          pageNumber={1}
          width={900}
          onLoadSuccess={removeTextLayerOffset}
        />
      </Document>
    </Layout>
  );
};

export default Resume;
