import Head from "next/head";
import Link from "next/link";
import ClientsFeedback from "../src/components/ClientsFeedback";
import Header from "../src/components/Header";
import Features from "../src/components/Features";
import About from "../src/components/About";
import CoreDesignFeatured from "../src/components/CoreDesignFeatured";
import CompanyStatistics from "../src/components/CompanyStatistics";
import WorkingProcess from "../src/components/WorkingProcess";
import Contact from "../src/components/Contact";
import Hero from "../src/components/Hero";
import RecentProjects from "../src/components/RecentProjects";
import Layout from "../src/layout/Layout";
import SideBar from "../src/layout/SideBar";

const IndexOnePage = () => {
  return (
    <Layout className="home-one" footer={1} noHeader>
      <Head>
      </Head>

      <Header />

      <SideBar />

      <Hero />

      <Features />

      <About />
     
     <CompanyStatistics />
     
      <CoreDesignFeatured />

      <RecentProjects />

      <WorkingProcess />

      <section className="call-to-action-area rel z-2">
        <div className="container">
          <div
            className="cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/background/cta-bg.jpg)",
            }}
          >
            <div className="row">
              <div className="col-xl-6">
                <div className="cta-item wow fadeInLeft delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-target" />
                  </div>
                  <h4>Have any Project On Minds ?</h4>
                  <Link href="/#contact">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="cta-item wow fadeInRight delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-target" />
                  </div>
                  <h4>We are to work SEO optimization ?</h4>
                  <Link href="/#contact">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Our Price List*/}
      {/* <section
        id="pricing"
        className="pricing-area-two bgc-lighter pt-240 pb-100 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Our Pricing Package</span>
                <h2>Website Design Packages</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-2s">
                <h4 className="title">Basic Plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">248</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-4s">
                <h4 className="title">Standard plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">352</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-2s">
                <h4 className="title">golder Plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">583</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-4s">
                <h4 className="title">platinum Plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">834</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-shapes">
          <img
            className="shape dots"
            src="assets/images/shapes/pricing-bg-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave"
            src="assets/images/shapes/pricing-wave-line.png"
            alt="Shape"
          />
        </div>
      </section> */}

      {/*Clients Feedback*/}
      {/* <ClientsFeedback /> */}
      <Contact />

      {/*News*/}
      {/* <section id="news" className="news-blog-area pt-130 pb-75 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Get Every Updates</span>
                <h2>Read Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row large-gap">
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>Easy Ways to Incorporate Customer Feedback</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author1.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Douglas B. Dickens</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 27 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>How to create modern web site for your business?</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author2.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Carson C. Rhodes</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>How to digital marketing work social networking?</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author3.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Robert T. Evans</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog4.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>Easy Ways to Incorporate Customer Feedback</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author4.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Stanley J. Contreras</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default IndexOnePage;
