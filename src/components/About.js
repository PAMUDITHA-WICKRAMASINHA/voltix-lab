const About = () => {
    return (
        <section id="about" className="about-area-one pt-130 pb-125 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="about-image-one bg-squire-shape rmb-85 wow fadeInUp delay-0-2s">
                <img src="assets/images/about/about-one.jpg" alt="About us" />
                <img
                  className="image-left"
                  src="assets/images/shapes/image-left.png"
                  alt="shape"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-content-one wow fadeInUp delay-0-4s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">
                    About digital solutions
                  </span>
                  <h2>Best web design solutions agency to growth</h2>
                </div>
                <ul className="list-style-one">
                  <li>
                    <div className="content">
                      <h4>Company Mission</h4>
                      <p>
                        Sit amet consectetur adipiscing elit, sed eiusmod tempor
                        incididunt labore et dolore magna aliqua esuis
                        suspendisse
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h4>Company Vision</h4>
                      <p>
                        Sit amet consectetur adipiscing elit, sed eiusmod tempor
                        incididunt labore et dolore magna aliqua esuis
                        suspendisse
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h4>Our Philosophy</h4>
                      <p>
                        Sit amet consectetur adipiscing elit, sed eiusmod tempor
                        incididunt labore et dolore magna aliqua esuis
                        suspendisse
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About;