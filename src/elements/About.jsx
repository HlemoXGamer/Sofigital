import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class About extends Component {
  render() {
    let title = "About";
    return (
      <React.Fragment>
        <PageHelmet pageTitle="About" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"About"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/about-3.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">
                        At Softigital, we specialize in providing innovative
                        software solutions that help businesses of all sizes
                        streamline their operations and increase productivity.
                        We have developed a reputation for delivering
                        high-quality, cost-effective solutions that meet the
                        unique needs of our clients. We specialize in providing
                        a wide range of services, including software
                        development, web design, mobile app development, and
                        more
                      </p>
                    </div>
                    <div className="row mt--30">
                      <div className=" col-12">
                        <div className="about-us-list">
                          <h3 className="title">Who we are</h3>
                          <p>
                            Our team is made up of skilled developers,
                            designers, and project managers who work together to
                            ensure that every project we undertake is completed
                            on time, within budget, and to the highest standards
                            of quality. We pride ourselves on our ability to
                            work closely with our clients to understand their
                            needs and deliver customized solutions that meet
                            their unique requirements. Our commitment to
                            excellence has earned us a reputation as a trusted
                            partner to businesses of all sizes and across a
                            broad range of industries. We believe that our
                            success is built on the success of our clients, and
                            we are dedicated to helping.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Finding Us Area  */}
        <div className="rn-columns-area ptb--120 bg_color--1">
          <div className="rn-finding-us-area rn-finding-us bg_color--1">
            <div className="inner">
              <div className="content-wrapper">
                <div className="content">
                  <div className="row">
                    <div className="col-12">
                      <div className="single-column custom-color custom-color--2">
                        <h4 className="tilte">Mission</h4>
                        <p>
                          To provide innovative and reliable software solutions
                          that help businesses and individuals achieve their
                          goals and improve their productivity. We strive to
                          stay ahead of the technological curve and deliver
                          cutting-edge software that is user-friendly, scalable,
                          and secure. Our mission is to empower our clients by
                          providing them with the tools they need to succeed in
                          their respective industries. We are committed to
                          building long-lasting relationships with our clients
                          and providing them with exceptional customer service
                          and support.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 mt--30 custom-col">
                      <div className="single-column custom-color custom-color--1">
                        <h4 className="tilte">Vision</h4>
                        <p>
                          To become a global leader in software development,
                          recognized for our commitment to excellence,
                          innovation, and customer satisfaction, and to
                          continuously push the boundaries of what is possible
                          with technology by providing innovative and
                          cutting-edge solutions that empower businesses to
                          achieve their goals and enhance their productivity,
                          while consistently delivering exceptional customer
                          service and support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="thumbnail">
                <div className="image">
                  <img
                    src="/assets/images/about/finding-us-01.png"
                    alt="Finding Images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        {/* Start Team Area  */}
        <div className="rn-team-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title service-style--3 text-center mb--25">
                  <h2 className="title">Skilled Team</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-01.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Jone Due</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-02.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">BM. Alamin</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-03.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Jone Due</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Team  */}
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default About;
