import { Document, Page, pdfjs } from 'react-pdf';
import React from "react";
import Couple from "../assets/1711.jpg"
import "../assets/index.css"
import Slide from "react-reveal/Slide";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Preview = ({ certificate, isLoading }) => {

  const Preimg = (
    <div className="container" style={{ "textAlign": "center" }} >
      <div className="container">
        <img class="responsive-img" width="45%" height="60%" src={Couple}></img>
      </div>
    </div>
  );

  return (
    <div className="pdf" style={{ "paddingTop": "3.5rem" }}>
      <Slide left cascade>
        <div>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4 class="center-align" style={{ "color": "white" }}>
              Certificate of <b style={{ "color": "red" }}>Love</b>
            </h4>
            <p className="center-align white-text text-darken-1">
              {isLoading ? "Printing Your Certificate..." : "Register to Print your Certificate"}
            </p>
          </div>
        </div>
      </Slide>
      <Slide right cascade>
        <div>
          {!certificate && Preimg}
          {certificate && (
            <Document file={certificate} loading={Preimg}>
              <Page pageNumber={1} />
            </Document>
          )}
        </div>
      </Slide>
    </div>
  );
};

export default Preview;