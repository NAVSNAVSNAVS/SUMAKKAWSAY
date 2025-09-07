import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ContactForm51 from '../components/contact-form51'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Sumak Kawsay</title>
        <meta property="og:title" content="Sumak Kawsay" />
      </Helmet>
      <Navbar8
        text={
          <Fragment>
            <span className="contact-text10">Start your Order</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="contact-text11">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text12">Our Story</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text13">Gallery</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text14">From Photo to Table</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text15">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text16">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text17">Services</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text18">Contact</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="contact-text19">Pricing</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="contact-text20">Process</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text21">Start your order</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text22">View Packages</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/about1"
        link3Url="/#Hero17"
        link3Url1="/#Steps2"
        page1Description={
          <Fragment>
            <span className="contact-text23">
              Welcome to Digital Portrait Place Cards
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text24">
              Learn more about our story and mission
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text25">
              Explore the services we offer for your events
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text26">
              Get in touch with us for inquiries
            </span>
          </Fragment>
        }
      ></Navbar8>
      <ContactForm51
        action={
          <Fragment>
            <span className="contact-text27">Submit</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text28">
              Share a few details about your event, and together we’ll explore
              designs, pricing, and customization options
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text29">Get in touch with us today!</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text30">Message Us</span>
          </Fragment>
        }
      ></ContactForm51>
      <Footer4
        text={
          <Fragment>
            <span className="contact-text31">Home</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="contact-text32">Our Story</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="contact-text33">Gallery</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="contact-text34">Process</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="contact-text35">Start your Order</span>
          </Fragment>
        }
        textUrl="/"
        textUrl1="/about1"
        textUrl2="/#Hero17"
        textUrl4="/contact"
        rootClassName="footer4root-class-name2"
      ></Footer4>
    </div>
  )
}

export default Contact
