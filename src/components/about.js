import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './about.css'

const About = (props) => {
  return (
    <div
      id={props.aboutId}
      className={`about-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="about-max-width1 thq-section-max-width">
        <div className="about-container2">
          <h2 className="about-title1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="about-text6">
                  Rooted in Harmony, Designed for Connection
                </span>
              </Fragment>
            )}
          </h2>
          <h3 className="about-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="about-text4">
                  I create custom portrait place cards that turn every seat into
                  a celebration — a unique keepsake for your guests, designed
                  with love and detail.
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="about-text8">Order Now</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
      <div className="about-max-width2 thq-section-max-width">
        <div className="about-card thq-flex-row">
          <img
            alt={props.blogPostImageAlt}
            src={props.blogPostImageSrc}
            className="about-image1 thq-img-ratio-4-3"
          />
          <div className="about-content1 thq-flex-column">
            <span className="about-author-name1 thq-body-small">
              {props.avatarName ?? (
                <Fragment>
                  <span className="about-text3">
                    Hi, I’m Andrea — the artist and heart behind SK Portrait
                    Place Cards.My work is inspired by Sumak Kawsay, an Andean
                    philosophy meaning “life in harmony.” For me, it’s more than
                    a phrase — it’s the foundation of everything I create. Each
                    place card is a celebration of connection, a way to make
                    every guest feel seen and valued.
                  </span>
                </Fragment>
              )}
            </span>
            <div className="about-share-buttons thq-flex-row"></div>
          </div>
        </div>
      </div>
      <div className="about-max-width3 thq-section-max-width">
        <div className="about-content2 thq-flex-column">
          <h1 className="about-title2 thq-heading-1">
            {props.blogPostTitle1 ?? (
              <Fragment>
                <span className="about-text5">More Than a Name Card</span>
              </Fragment>
            )}
          </h1>
          <span className="about-author-name2 thq-body-small">
            {props.authorName ?? (
              <Fragment>
                <span className="about-text7">
                  In a world where details are often mass-produced, I believe in
                  creating something truly personal. Portrait place cards aren’t
                  just table markers — they’re tiny works of art that spark
                  conversation, bring smiles, and become cherished keepsakes
                  long after the celebration ends.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <img
          alt={props.blogPostImageAlt1}
          src={props.blogPostImageSrc1}
          className="about-image2 thq-img-ratio-4-3"
        />
      </div>
    </div>
  )
}

About.defaultProps = {
  blogPostImageSrc:
    'https://images.unsplash.com/photo-1527239441953-caffd968d952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTExNDc3MXw&ixlib=rb-4.1.0&q=80&w=1400',
  avatarName: undefined,
  blogPostImageAlt1: 'Digital Portrait Place Cards at Event',
  blogPostImageSrc1:
    'https://images.unsplash.com/photo-1653719883870-5da2720911ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTExNTEyNXw&ixlib=rb-4.1.0&q=80&w=1400',
  rootClassName: '',
  content1: undefined,
  blogPostTitle1: undefined,
  blogPostImageAlt: 'Digital Portrait Place Cards for Events',
  heading1: undefined,
  authorName: undefined,
  aboutId: '',
  action1: undefined,
}

About.propTypes = {
  blogPostImageSrc: PropTypes.string,
  avatarName: PropTypes.element,
  blogPostImageAlt1: PropTypes.string,
  blogPostImageSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
  blogPostTitle1: PropTypes.element,
  blogPostImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  authorName: PropTypes.element,
  aboutId: PropTypes.string,
  action1: PropTypes.element,
}

export default About
