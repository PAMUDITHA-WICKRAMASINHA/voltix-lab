import Link from "next/link";

const Features = () => {
  return (
    <section className="feature-area-five bgc-lighter pt-100 pb-70">
      <div className="container">
        <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-10">Core Features</span>
          <h2>Amazing web design features</h2>
        </div>
        <div className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
          <div className="col wow fadeInUp delay-0-2s">
            <div className="feature-item-five">
              <i className="flaticon-responsive" />
              <h5>
                Responsive design
              </h5>
            </div>
          </div>
          <div className="col wow fadeInUp delay-0-3s">
            <div className="feature-item-five">
              <i className="flaticon-feature" />
              <h5>
                Powerful Customization
              </h5>
            </div>
          </div>
          <div className="col wow fadeInUp delay-0-4s">
            <div className="feature-item-five">
              <i className="flaticon-aim" />
              <h5>
                Cool &amp; modern animations
              </h5>
            </div>
          </div>
          <div className="col wow fadeInUp delay-0-5s">
            <div className="feature-item-five">
              <i className="flaticon-seo" />
              <h5>
                SEO Friendly Coding
              </h5>
            </div>
          </div>
          <div className="col wow fadeInUp delay-0-6s">
            <div className="feature-item-five">
              <i className="flaticon-search-location" />
              <h5>
                Best Technical supports
              </h5>
            </div>
          </div>
          <div className="col wow fadeInUp delay-0-7s">
            <div className="feature-item-five">
              <i className="flaticon-settings" />
              <h5>
                Varied Layouts &amp; parallax
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;
