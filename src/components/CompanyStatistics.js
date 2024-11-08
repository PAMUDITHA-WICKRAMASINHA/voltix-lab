import dynamic from "next/dynamic";
const Counter = dynamic(() => import("./Counter"), {
    ssr: false,
  });

const CompanyStatistics = () => {
    return(
        <section className="statistics-area-three bgs-cover pb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7">
              <div className="statistics-three-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="row justify-content-center justify-content-xl-start">
                  <div className="col-xl-9">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">
                        Company Statistics
                      </span>
                      <h2>We’ve some achievement from global partners</h2>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-3s">
                      <i className="flaticon-startup" />
                      <Counter end={100} />
                      <span className="counter-title">Projects complete</span>
                      <p>On the other denonce with righteous indin</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-5s">
                      <i className="flaticon-global" />
                      <Counter end={10} />
                      <span className="counter-title">Global Client’s</span>
                      <p>On the other denonce with righteous indin</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-7s">
                      <i className="flaticon-rating" />
                      <Counter end={100} />
                      <span className="counter-title">Happy Customer</span>
                      <p>On the other denonce with righteous indin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="statistics-three-image bg-squire-shape mb-30 wow fadeInLeft delay-0-3s">
                <img
                  src="assets/images/about/statictics.jpg"
                  alt="Statictics"
                />
                <img
                  className="image-right"
                  src="assets/images/shapes/image-right.png"
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CompanyStatistics;