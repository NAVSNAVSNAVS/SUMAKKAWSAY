import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing14.css'

const Pricing14 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div
      id={props.pricing14Id}
      className="pricing14-pricing23 thq-section-padding"
    >
      <div className="pricing14-max-width thq-section-max-width">
        <div className="pricing14-section-title">
          <div className="pricing14-content">
            <h2 className="pricing14-text100 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="pricing14-text154">
                    Packages &amp; Keepsakes
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="pricing14-text101 thq-body-large">
              {props.content2111 ?? (
                <Fragment>
                  <span className="pricing14-text149">
                    Find the perfect way to bring a personal touch to your event
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        {isMonthly === true && (
          <div className="pricing14-container1">
            <div className="pricing14-column1 thq-card">
              <div className="pricing14-price10">
                <div className="pricing14-price11">
                  <p className="pricing14-text102 thq-body-large">
                    {props.plan1 ?? (
                      <Fragment>
                        <span className="pricing14-text184">
                          The Artisan Package
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="pricing14-text103 thq-body-large">
                    {props.plan1Yearly ?? (
                      <Fragment>
                        <span className="pricing14-text153">
                          For hands-on creators who love crafting their own
                          wedding/event details. We design each custom portrait
                          place card and send you high-resolution digital files
                          with an easy step-by-step guide so you can print, cut,
                          and assemble them yourself. Ideal for people who want
                          to infuse their own creative touch while staying
                          budget friendly.
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="pricing14-text104 thq-body-large">
                    {props.plan12 ?? (
                      <Fragment>
                        <span className="pricing14-text166">Includes:</span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing14-list1">
                  <div className="pricing14-list-item10">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon10 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1 ?? (
                        <Fragment>
                          <span className="pricing14-text181">
                            Personalized digital portrait place card for each
                            guest
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item11">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon12 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text160">
                            Clear printing &amp; cutting instructions
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item12">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon14 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text197">
                            Files optimized for professional or home printing
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <h3 className="pricing14-text108 thq-heading-3">
                  {props.plan1Price ?? (
                    <Fragment>
                      <span className="pricing14-text163">$8 per card</span>
                    </Fragment>
                  )}
                </h3>
              </div>
              <button className="pricing14-button1 thq-button-animated thq-button-outline">
                <a
                  href={props.textUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {props.text ?? (
                    <Fragment>
                      <span className="pricing14-text172">Link</span>
                    </Fragment>
                  )}
                </a>
              </button>
            </div>
            <div className="pricing14-column2 thq-card">
              <div className="pricing14-price12">
                <div className="pricing14-price13">
                  <p className="pricing14-text109 thq-body-large">
                    {props.plan2 ?? (
                      <Fragment>
                        <span className="pricing14-text188">
                          The Celebration Collection
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="thq-body-small pricing14-text110">
                    {props.plan2Feature1 ?? (
                      <Fragment>
                        <span className="pricing14-text156">
                          Your portraits beautifully created and ready to use.
                          We print your custom placecards on premium cardstock,
                          expertly cut them and mail them directly to your door
                          - no scissors, no stress
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <p className="pricing14-text111 thq-body-large">
                    {props.plan22 ?? (
                      <Fragment>
                        <span className="pricing14-text150">Includes:</span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing14-list2">
                  <div className="pricing14-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature12 ?? (
                        <Fragment>
                          <span className="pricing14-text167">
                            Professionally printed portraits
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item14">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon18 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text170">
                            Precision cutting for a clean, polished finish
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item15">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon20 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text190">
                            Shipped flat and ready to be placed on tables
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="pricing14-text115 thq-heading-3">
                {props.plan2Price ?? (
                  <Fragment>
                    <span className="pricing14-text192">$15 per card</span>
                  </Fragment>
                )}
              </h3>
              <button className="pricing14-button2 thq-button-filled thq-button-animated">
                <a
                  href={props.textUrl1}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {props.text1 ?? (
                    <Fragment>
                      <span className="pricing14-text185">Link</span>
                    </Fragment>
                  )}
                </a>
              </button>
            </div>
            <div className="pricing14-column3 thq-card">
              <div className="pricing14-price14">
                <div className="pricing14-price15">
                  <p className="pricing14-text116 thq-body-large">
                    {props.plan3 ?? (
                      <Fragment>
                        <span className="pricing14-text171">
                          The Luxe Collection
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="pricing14-text117 thq-body-large">
                    {props.plan3Yearly ?? (
                      <Fragment>
                        <span className="pricing14-text173">
                          The ultimate stress-free experience for a flawless
                          wedding day. We create, print, cut, and assemble each
                          portrait place card with its own acrylic stand. Cards
                          arrive organized by table, so your wedding planner or
                          day-of coordinator can simply set them in place.
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="pricing14-text118 thq-body-large">
                    {props.plan32 ?? (
                      <Fragment>
                        <span className="pricing14-text169">Includes:</span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing14-list3">
                  <div className="pricing14-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1 ?? (
                        <Fragment>
                          <span className="pricing14-text179">
                            Premium printed and cut portraits
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text161">
                            Elegant acrylic stands for each card
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item18">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon26 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text165">
                            Organized &amp; labeled by table for seamless setup
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item19">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon28 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4 ?? (
                        <Fragment>
                          <span className="pricing14-text200">
                            Carefully packaged and shipped to your door
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <h3 className="pricing14-text123 thq-heading-3">
                  {props.plan3Price ?? (
                    <Fragment>
                      <span className="pricing14-text164">$25 per card</span>
                    </Fragment>
                  )}
                </h3>
              </div>
              <button className="pricing14-button3 thq-button-filled thq-button-animated">
                <a
                  href={props.textUrl2}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {props.text2 ?? (
                    <Fragment>
                      <span className="pricing14-text151">Link</span>
                    </Fragment>
                  )}
                </a>
              </button>
            </div>
          </div>
        )}
        {isMonthly === false && (
          <div className="pricing14-container2">
            <div className="pricing14-column4 thq-card">
              <div className="pricing14-price16">
                <div className="pricing14-price17">
                  <span className="pricing14-text124 thq-body-large">
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="pricing14-text162">Basic plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing14-text125 thq-heading-3">
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <span className="pricing14-text191">$200/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text183">
                          or $20 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-list4">
                  <div className="pricing14-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text194">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text180">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text178">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button4 thq-button-animated thq-button-outline">
                <span className="thq-body-small">
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text158">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-column5 thq-card">
              <div className="pricing14-price18">
                <div className="pricing14-price19">
                  <span className="pricing14-text131 thq-body-large">
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="pricing14-text152">Business plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing14-text132 thq-heading-3">
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <span className="pricing14-text168">$299/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text155">
                          or $29 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-list5">
                  <div className="pricing14-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text157">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text199">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text177">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="pricing14-text175">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button5 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text174">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-column6 thq-card">
              <div className="pricing14-price20">
                <div className="pricing14-price21">
                  <span className="pricing14-text139 thq-body-large">
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="pricing14-text195">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing14-text140 thq-heading-3">
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <span className="pricing14-text187">$499/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text159">
                          or $49 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-list6">
                  <div className="pricing14-list-item27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text182">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item28">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text176">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item29">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text193">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item30">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="pricing14-text189">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item31">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="pricing14-text198">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button6 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text196">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
        <p className="pricing14-text148 thq-body-large">
          {props.content211 ?? (
            <Fragment>
              <span className="pricing14-text186">
                Our packages are designed to fit your style, timeline, and
                vision for the day
              </span>
            </Fragment>
          )}
        </p>
      </div>
    </div>
  )
}

Pricing14.defaultProps = {
  content2111: undefined,
  plan22: undefined,
  text2: undefined,
  plan21: undefined,
  plan1Yearly: undefined,
  textUrl2: 'https://example.com',
  heading1: undefined,
  plan2Yearly1: undefined,
  plan2Feature1: undefined,
  plan2Feature11: undefined,
  plan1Action1: undefined,
  plan3Yearly1: undefined,
  plan1Feature2: undefined,
  plan3Feature2: undefined,
  plan11: undefined,
  plan1Price: undefined,
  plan3Price: undefined,
  plan3Feature3: undefined,
  plan12: undefined,
  plan2Feature12: undefined,
  plan2Price1: undefined,
  plan32: undefined,
  plan2Feature2: undefined,
  plan3: undefined,
  text: undefined,
  textUrl: 'https://example.com',
  textUrl1: 'https://example.com',
  plan3Yearly: undefined,
  plan2Action1: undefined,
  plan2Feature41: undefined,
  plan3Feature21: undefined,
  plan2Feature31: undefined,
  plan1Feature31: undefined,
  plan3Feature1: undefined,
  plan1Feature21: undefined,
  plan1Feature1: undefined,
  plan3Feature11: undefined,
  plan1Yearly1: undefined,
  plan1: undefined,
  text1: undefined,
  content211: undefined,
  plan3Price1: undefined,
  plan2: undefined,
  plan3Feature41: undefined,
  plan2Feature3: undefined,
  plan1Price1: undefined,
  pricing14Id: '',
  plan2Price: undefined,
  plan3Feature31: undefined,
  plan1Feature11: undefined,
  plan31: undefined,
  plan3Action1: undefined,
  plan1Feature3: undefined,
  plan3Feature51: undefined,
  plan2Feature21: undefined,
  plan3Feature4: undefined,
}

Pricing14.propTypes = {
  content2111: PropTypes.element,
  plan22: PropTypes.element,
  text2: PropTypes.element,
  plan21: PropTypes.element,
  plan1Yearly: PropTypes.element,
  textUrl2: PropTypes.string,
  heading1: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan11: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3Price: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan12: PropTypes.element,
  plan2Feature12: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan32: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan3: PropTypes.element,
  text: PropTypes.element,
  textUrl: PropTypes.string,
  textUrl1: PropTypes.string,
  plan3Yearly: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan1: PropTypes.element,
  text1: PropTypes.element,
  content211: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan2: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan1Price1: PropTypes.element,
  pricing14Id: PropTypes.string,
  plan2Price: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan31: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan3Feature4: PropTypes.element,
}

export default Pricing14
