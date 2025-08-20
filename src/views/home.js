import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Steps2 from '../components/steps2'
import Pricing14 from '../components/pricing14'
import About from '../components/about'
import Testimonial17 from '../components/testimonial17'
import CTA26 from '../components/cta26'
import Footer4 from '../components/footer4'
import Features25 from '../components/features25'
import Features24 from '../components/features24'
import BlogPostHeader10 from '../components/blog-post-header10'
import BlogPostHeader8 from '../components/blog-post-header8'
import ContactForm5 from '../components/contact-form5'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Academic Stormy Fly</title>
        <meta property="og:title" content="Academic Stormy Fly" />
      </Helmet>
      <Navbar8
        text={
          <Fragment>
            <span className="home-text100">Start your Order</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text101">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">Our Story</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text103">Gallery</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text104">From Photo to Table</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text105">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text107">Services</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text108">Contact</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text109">View Packages</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="home-text110">Get Started</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text111">Start your order</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text112">View Packages</span>
          </Fragment>
        }
        textUrl="/contact"
        link1Url="/"
        link2Url="/about1"
        link3Url="#Hero17"
        textUrl1="#Pricing14"
        link3Url1="#Steps2"
        page1Description={
          <Fragment>
            <span className="home-text113">
              Welcome to Digital Portrait Place Cards
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text114">
              Learn more about our story and mission
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text115">
              Explore the services we offer for your events
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text116">
              Get in touch with us for inquiries
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        text={
          <Fragment>
            <span className="home-text117">Start your Order</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text118">View Packages</span>
          </Fragment>
        }
        textUrl="/contact"
        content1={
          <Fragment>
            <span className="home-text119">
              Our work celebrates connection, artistry, and the joy of
              gathering. This is where art meets celebration.
            </span>
          </Fragment>
        }
        hero17Id="Hero17"
        textUrl1="#Pricing14"
        content11={
          <Fragment>
            <span className="home-text120">SUMAK KAWSAY</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1735201334208-bfcda74f1bc0?ixid=M3w5MTMyMXwwfDF8YWxsfDF8fHx8fHx8fDE3NTUxODAzNDJ8&amp;ixlib=rb-4.1.0&amp;w=1500"
        content111={
          <Fragment>
            <span className="home-text121">
              Custom portrait place cards that turn every seat into a
              celebration — a unique keepsake for your guests
            </span>
          </Fragment>
        }
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Steps2
        text={
          <Fragment>
            <span className="home-text122">Start your Order</span>
          </Fragment>
        }
        textUrl="/contact"
        steps2Id="Steps2"
        step1Title={
          <Fragment>
            <span className="home-text123">
              Select your Design &amp; Package
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text124">Upload guest list &amp; Photos</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text125">We Illustrate each guest</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text126">We deliver them your way</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text127">
              Browse our gallery or Instagram for inspiration—or share your own
              ideas! If you have stationery or aesthetic references you’d like
              to match, simply send them to us, and we’ll create a cohesive
              design tailored to your event
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text128">
              Candid, formal or anything in between
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text129">
              Adding warmth, personality, and detail to every portrait
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text130">
              You will receive high-resolution digital files of all the portrait
              place cards ready for printing or fully assembled with acrylic
              stands, depending on your chosen package.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Pricing14
        text={
          <Fragment>
            <span className="home-text131">Start your Order</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text132">The Artisan Package</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text133">The Celebration Collection</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text134">The Luxe Collection</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text135">Start your Order</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text136">Start your Order</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text137">Basic plan</span>
          </Fragment>
        }
        plan12={
          <Fragment>
            <span className="home-text138">Includes:</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text139">Business plan</span>
          </Fragment>
        }
        plan22={
          <Fragment>
            <span className="home-text140">Includes:</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text141">Enterprise plan</span>
          </Fragment>
        }
        plan32={
          <Fragment>
            <span className="home-text142">Includes:</span>
          </Fragment>
        }
        textUrl="/contact"
        heading1={
          <Fragment>
            <span className="home-text143">Packages &amp; Keepsakes</span>
          </Fragment>
        }
        textUrl1="/contact"
        textUrl2="/contact"
        content211={
          <Fragment>
            <span className="home-text144">
              Our packages are designed to fit your style, timeline, and vision
              for the day
            </span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text145">$8 per card</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text146">$15 per card</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text147">$25 per card</span>
          </Fragment>
        }
        content2111={
          <Fragment>
            <span className="home-text148">
              Find the perfect way to bring a personal touch to your event
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text149">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text150">
              For hands-on creators who love crafting their own wedding/event
              details. We design each custom portrait place card and send you
              high-resolution digital files with an easy step-by-step guide so
              you can print, cut, and assemble them yourself. Ideal for people
              who want to infuse their own creative touch while staying budget
              friendly.
            </span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151">$299/yr</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">
              The ultimate stress-free experience for a flawless wedding day. We
              create, print, cut, and assemble each portrait place card with its
              own acrylic stand. Cards arrive organized by table, so your
              wedding planner or day-of coordinator can simply set them in
              place.
            </span>
          </Fragment>
        }
        pricing14Id="Pricing14"
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">
              Personalized digital portrait place card for each guest
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">
              Clear printing &amp; cutting instructions
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">
              Files optimized for professional or home printing
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">
              Your portraits beautifully created and ready to use. We print your
              custom placecards on premium cardstock, expertly cut them and mail
              them directly to your door - no scissors, no stress
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">
              Precision cutting for a clean, polished finish
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">
              Shipped flat and ready to be placed on tables
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text166">
              Premium printed and cut portraits
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text167">
              Elegant acrylic stands for each card
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text168">
              Organized &amp; labeled by table for seamless setup
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text169">
              Carefully packaged and shipped to your door
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature12={
          <Fragment>
            <span className="home-text174">
              Professionally printed portraits
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <About
        aboutId="About"
        action1={
          <Fragment>
            <span className="home-text183">Order Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text184">
              I create custom portrait place cards that turn every seat into a
              celebration — a unique keepsake for your guests, designed with
              love and detail.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text185">
              Rooted in Harmony, Designed for Connection
            </span>
          </Fragment>
        }
        authorName={
          <Fragment>
            <span className="home-text186">
              In a world where details are often mass-produced, I believe in
              creating something truly personal. Portrait place cards aren’t
              just table markers — they’re tiny works of art that spark
              conversation, bring smiles, and become cherished keepsakes long
              after the celebration ends.
            </span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="home-text187">
              Hi, I’m Andrea — the artist and heart behind SK Portrait Place
              Cards.My work is inspired by Sumak Kawsay, an Andean philosophy
              meaning “life in harmony.” For me, it’s more than a phrase — it’s
              the foundation of everything I create. Each place card is a
              celebration of connection, a way to make every guest feel seen and
              valued.
            </span>
          </Fragment>
        }
        rootClassName="aboutroot-class-name"
        blogPostTitle1={
          <Fragment>
            <span className="home-text188">More Than a Name Card</span>
          </Fragment>
        }
      ></About>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text189">
              The portrait place cards were a hit at our wedding! Our guests
              were amazed by the unique concept and loved taking home a
              personalized keepsake.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text190">
              The placecards were such a hit! They became a real conversation
              starter and added a unique, personal touch to the wedding—everyone
              wanted a photo with theirs.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text191">
              The digital portrait place cards brought a sense of warmth and
              intimacy to the intimate gathering I organized. The guests were
              delighted by the personalization and artistic flair.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text192">
              The place cards were such a beautiful touch! I even kept mine at
              home, and whenever friends visit, they always ask where I had it
              made.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text193">Testimonials from our wedding.</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text194">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text195">Andrew D.</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text196">Emelyn M.</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197">Cindy W.   </span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text198">Chaska A.</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text199">Groom</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text200">Bridesmaid</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Event Planner</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text202">Wedding Guest</span>
          </Fragment>
        }
      ></Testimonial17>
      <CTA26
        text2={
          <Fragment>
            <span className="home-text203">Start your Order</span>
          </Fragment>
        }
        textUrl="/contact"
        content1={
          <Fragment>
            <span className="home-text204">
              Let’s bring your guests into the heart of your celebration. Share
              a few details about your event, and together we’ll explore
              designs, and customization options to craft the perfect place
              cards for your day.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205">Ready to start your order?</span>
          </Fragment>
        }
        textUrl1="/contact"
        content11={
          <Fragment>
            <span className="home-text206">Contact info:</span>
          </Fragment>
        }
        content112={
          <Fragment>
            <span className="home-text207">949-870-8054</span>
          </Fragment>
        }
        content1121={
          <Fragment>
            <span className="home-text208">sk.community@gmail.com</span>
          </Fragment>
        }
      ></CTA26>
      <Footer4
        text={
          <Fragment>
            <span className="home-text209">Home</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text210">Our Story</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text211">Gallery</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text212">Process</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text213">Start your Order</span>
          </Fragment>
        }
        textUrl="/"
        textUrl1="/about1"
        textUrl2="#Hero17"
        textUrl3="#Steps2"
        textUrl4="/contact"
        rootClassName="footer4root-class-name"
      ></Footer4>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text214">Custom Portraits</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text215">Personalized Details</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text216">Optional Customization</span>
          </Fragment>
        }
        rootClassName="features25root-class-name"
        feature1Description={
          <Fragment>
            <span className="home-text217">
              Each card features a custom portrait of the guest, adding a
              personal touch to their place setting.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text218">
              Include the guest&apos;s name and/or table number on each card for
              easy seating arrangements.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text219">
              Offer optional personalization to cater to individual preferences
              and event themes.
            </span>
          </Fragment>
        }
      ></Features25>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text220">Custom Portraits</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text221">Name and Table Number</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text222">Personalization Options</span>
          </Fragment>
        }
        rootClassName="features24root-class-name"
        feature1Description={
          <Fragment>
            <span className="home-text223">
              Each card features a custom portrait of the guest
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text224">
              Name and/or table number included
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text225">
              Option to include personalization
            </span>
          </Fragment>
        }
      ></Features24>
      <BlogPostHeader10
        category={
          <Fragment>
            <span className="home-text226">Events</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="home-text227">Digital Portrait Place Cards</span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="home-text228">
              Personalize Your Event with Custom Digital Portrait Place Cards
            </span>
          </Fragment>
        }
        rootClassName="blog-post-header10root-class-name"
      ></BlogPostHeader10>
      <BlogPostHeader8
        authorName={
          <Fragment>
            <span className="home-text229">Emily Smith</span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="home-text230">
              5 Unique Ways to Use Digital Portrait Place Cards at Your Next
              Event
            </span>
          </Fragment>
        }
        rootClassName="blog-post-header8root-class-name"
      ></BlogPostHeader8>
      <ContactForm5
        action={
          <Fragment>
            <span className="home-text231">Submit</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text232">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text233">Get in touch with us today!</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text234">Contact us</span>
          </Fragment>
        }
        rootClassName="contact-form5root-class-name"
        contactForm5Id="ContactForm5"
      ></ContactForm5>
    </div>
  )
}

export default Home
