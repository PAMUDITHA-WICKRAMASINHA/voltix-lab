import Link from "next/link";

const CoreDesignFeatured = () => {
    return (
        <section
        id="featured"
        className="design-feature-area overflow-hidden pt-130 pb-100 text-white bgc-black-with-lighting rel z-1"
      >
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Core Design Featured</span>
            <h2>What we provider for website</h2>
          </div>
          <div className="row no-gap align-items-center">
            <div className="col-lg-3">
              <div className="feature-left">
                <div className="row">
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three wow fadeInRight delay-0-2s">
                      <div className="icon">
                        <i className="flaticon-design" />
                      </div>
                      <div className="content">
                        <h4>
                        Website Creation from Scratch
                        </h4>
                        <Link href="/service-details">
                          <a className="more-btn">
                            <i className="fal fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three wow fadeInRight delay-0-3s">
                      <div className="icon">
                        <i className="flaticon-web-page" />
                      </div>
                      <div className="content">
                        <h4>
                        Website maintenance Services
                        </h4>
                        <Link href="/service-details">
                          <a className="more-btn">
                            <i className="fal fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-middle rmt-30">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    className="circle-text"
                    src="assets/images/shapes/feature-image-top.png"
                    alt="Text"
                  />
                  <img
                    className="round"
                    src="assets/images/features/feature-middle.png"
                    alt="Feature Middle"
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="service-item style-three wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="flaticon-online" />
                      </div>
                      <div className="content">
                        <h4>
                        Mobile app development
                        </h4>
                        <Link href="/service-details">
                          <a className="more-btn">
                            <i className="fal fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-three mt-30 wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-web-programming" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service-details">
                            <a>Responsive websites (UI/UX) design</a>
                          </Link>
                        </h4>
                        <Link href="/service-details">
                          <a className="more-btn">
                            <i className="fal fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-right">
                <div className="row">
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three mt-100 wow fadeInLeft delay-0-2s">
                      <div className="icon">
                        <i className="flaticon-graphic-design" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service-details">
                            <a>Search Engine Optimization</a>
                          </Link>
                        </h4>
                        <Link href="/service-details">
                          <a className="more-btn">
                            <i className="fal fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three wow fadeInLeft delay-0-3s">
                      <div className="icon">
                        <i className="flaticon-user-experience" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service-details">
                            <a>User Experience and Design</a>
                          </Link>
                        </h4>
                        <Link href="/service-details">
                          <a className="more-btn">
                            <i className="fal fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="design-feature-shapes">
          <img
            className="shape dots"
            src="assets/images/shapes/slider-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave-line"
            src="assets/images/shapes/feature-wave-line.png"
            alt="Shape"
          />
        </div>
      </section>
    )
}

export default CoreDesignFeatured;