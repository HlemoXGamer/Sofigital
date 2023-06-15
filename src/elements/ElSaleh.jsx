import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Slider from "react-slick";
import { customSlickDot, portfolioSlick } from "../page-demo/script";

const features = [
  {
    title: "One Third",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.",
  },
  {
    title: "One Third",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.",
  },
  {
    title: "One Third",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.",
  },
  {
    title: "One Third",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.",
  },
  {
    title: "One Third",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.",
  },
  {
    title: "One Third",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.",
  },
];

class ServiceDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle="Service Details" />
        {/* End Pagehelmet  */}

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
          data-black-overlay="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">EL SALEH</h2>
                  <p>A charity projects system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-4 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="/assets/images/service/saleh1.svg"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            El Saleh project is a framework for managing and
                            organizing initiatives aimed at raising funds or
                            awareness for charitable causes. in addition to the
                            dashboard for a charity system includes Donation
                            Tracker, Fundraising Goals, Project Tracker,
                            Volunteer Management, Social Media Metrics, and
                            Financial Reports.
                          </p>
                          <h4 className="title">Proceess of metel</h4>
                          <ul className="liststyle">
                            <li>
                              Fundraising platform: platform allows individuals
                              or organizations to collect donations.
                            </li>
                            <li>
                              Donor management: involves tracking donor
                              information to organizing communications.
                            </li>
                            <li>
                              Event management: Event management involves
                              planning and executing charity events
                            </li>
                            <li>
                              Impact reporting: measuring and communicating the
                              impact of initiatives to donors
                            </li>
                            <li>
                              Financial management: tracking and reporting on
                              the financial aspects of initiatives
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-8 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">Challenges</h4>
                          <ul className="liststyle">
                            <li>Yet this above sewed flirted opened ouch</li>
                            <li>Goldfinch realistic sporadic ingenuous</li>
                            <li>
                              Abominable this abidin far successfully then like
                              piquan
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src="/assets/images/service/saleh2.svg"
                            alt="Service Images"
                          />
                          <ModalVideo
                            channel="youtube"
                            isOpen={this.state.isOpen}
                            videoId="ZOoVOfieAF8"
                            onClose={() => this.setState({ isOpen: false })}
                          />
                          <button
                            className="video-popup"
                            onClick={this.openModal}
                          >
                            <span className="play-icon"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    {/* Start Columns Area */}
                    <div className="wrapper portfolio-sacousel-inner mb--55">
                      <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...customSlickDot}>
                          {features.map((feature, index) => (
                            <div className="portfolio" key={index}>
                              <div className="rn-columns-area ptb--120 bg_color--1">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-12 p-0">
                                      <div className="single-column custom-color">
                                        <h4 className="tilte">
                                          {feature.title}
                                        </h4>
                                        <p>{feature.content}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                    {/* End Columns Area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Wrapper */}

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
export default ServiceDetails;
