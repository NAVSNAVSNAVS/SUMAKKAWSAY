import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text26">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text34">
                  Testimonials from our wedding.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            Andrew D.
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">Groom</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text27">
                        The portrait place cards were a hit at our wedding! Our
                        guests were amazed by the unique concept and loved
                        taking home a personalized keepsake.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Emelyn M.
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Bridesmaid
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text28">
                        The placecards were such a hit! They became a real
                        conversation starter and added a unique, personal touch
                        to the wedding—everyone wanted a photo with theirs.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text31">
                            Cindy W.   
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Event Planner
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        The digital portrait place cards brought a sense of
                        warmth and intimacy to the intimate gathering I
                        organized. The guests were delighted by the
                        personalization and artistic flair.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Chaska A.
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            Wedding Guest
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text24">
                        The place cards were such a beautiful touch! I even kept
                        mine at home, and whenever friends visit, they always
                        ask where I had it made.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author3Alt: 'Portrait of Emily Davis',
  rootClassName: '',
  review4: undefined,
  author4Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTExNDQzMHw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: undefined,
  review1: undefined,
  author4Alt: 'Portrait of Alex Rodriguez',
  review2: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1636041247094-a9e97be7a77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTExNDQzMHw&ixlib=rb-4.1.0&q=80&w=1080',
  author1Alt: 'Portrait of Sarah Johnson',
  author1Src:
    'https://images.unsplash.com/photo-1458696352784-ffe1f47c2edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTExNDQzMHw&ixlib=rb-4.1.0&q=80&w=1080',
  author1Name: undefined,
  author3Position: undefined,
  author3Name: undefined,
  author4Name: undefined,
  author2Position: undefined,
  content1: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1495216875107-c6c043eb703f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTExNDQzMXw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Name: undefined,
  author2Alt: 'Portrait of Michael Smith',
  review3: undefined,
  author1Position: undefined,
}

Testimonial17.propTypes = {
  author3Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  review4: PropTypes.element,
  author4Position: PropTypes.element,
  author4Src: PropTypes.string,
  heading1: PropTypes.element,
  review1: PropTypes.element,
  author4Alt: PropTypes.string,
  review2: PropTypes.element,
  author2Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author1Name: PropTypes.element,
  author3Position: PropTypes.element,
  author3Name: PropTypes.element,
  author4Name: PropTypes.element,
  author2Position: PropTypes.element,
  content1: PropTypes.element,
  author3Src: PropTypes.string,
  author2Name: PropTypes.element,
  author2Alt: PropTypes.string,
  review3: PropTypes.element,
  author1Position: PropTypes.element,
}

export default Testimonial17
