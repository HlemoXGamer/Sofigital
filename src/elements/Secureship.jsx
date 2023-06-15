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
    title: "Pricing",
    content: "No Monthly Fees. No Setup Fees. No Commitments.",
  },
  {
    title: "Multiple Carriers",
    content:
      "Choose the best carrier for you. Compare prices, Create shipments, Track, Schedule Pickups and more!",
  },
  {
    title: "Smart Notifications",
    content:
      "The best way to avoid problems is to prevent them from happening in the first place. Our built-in alerts will warn you of some potential issues, as you create your shipments!",
  },
  {
    title: "Consolidated Invoices",
    content:
      "Our consolidated invoice takes away the headache from managing multiple vendors. With no delayed charges, you’ll easily see the true cost of every shipment.",
  },
  {
    title: "Address Book",
    content:
      "Save time by using the built in address book. Our address book will save you from having to retype the same shipment information every time.",
  },
  {
    title: "Printing",
    content: "Print on a Thermal Printer or a Desktop Printer.",
  },
  {
    title: "Ecommerce Integration",
    content:
      "Provide exact, real-time shipping prices for your Shopify orders. One-click carrier compliant shipping labels.",
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
                  <h2 className="title theme-gradient">SECURESHIP</h2>
                  <p>An online shipment system</p>
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
                            src="/assets/images/service/service-01.svg"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            An online shipment system is a web-based platform
                            that allows users to manage and track their
                            shipments from anywhere with an internet connection.
                            These systems are typically used by businesses and
                            individuals who need to send or receive goods, and
                            offer a range of features to simplify the shipment
                            process.
                          </p>
                          <h4 className="title">online shipment system</h4>
                          <ul className="liststyle">
                            <li>
                              Shipment tracking: Users can track the progress of
                              their shipments
                            </li>
                            <li>
                              Shipping labels: Users can create and print
                              shipping labels directly.
                            </li>
                            <li>
                              Carrier selection: Users can choose from a variety
                              of carriers.
                            </li>
                            <li>
                              Address validation: The system can validate his
                              shipping addresses.
                            </li>
                            <li>
                              Reporting: Users can access reports on their
                              shipping process details.
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
                            src="/assets/images/service/service-02.png"
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
                                      <div
                                        className="single-column custom-color"
                                        style={{ height: "250px" }}
                                      >
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
