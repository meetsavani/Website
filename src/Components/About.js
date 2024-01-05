import React, { Component } from "react";
import { Document, Page } from 'react-pdf';
import Fade from "react-reveal";
import pdf from './MeetSavani.pdf'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="bttn-container">
                  <a className="bttn-customize" href={pdf} download="MeetSavani.pdf">Download Resume</a>
                </div>
              </div>
              <div className="columns download width-full">
                {/* <iframe className="resume-content" src="https://docs.google.com/document/d/e/2PACX-1vT5YLy-lhme7j-puhOnzGIUAep_zc1SWu5MtR5bhxdKKtVelYp0kNMEfNF-VNFlhIB6-Ijy8xllXjDQ/pub?embedded=true"></iframe> */}
                <Document file={pdf}>
                  <Page pageNumber={1}/>
                </Document>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
