const About = () => {
  return (
    <section id="about" className="about-area-one pt-130 pb-125 rel z-1">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="about-image-one bg-squire-shape rmb-85 wow fadeInUp delay-0-2s">
              <img src="assets/images/about/about-one.webp" alt="About us" />
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
                    {/* <h4>Company Mission</h4> */}
                    <p>
                      We empower businesses and individuals with innovative, scalable, and user-friendly software solutions, prioritizing customer needs and harnessing cutting-edge technology to drive productivity, growth, and long-term sustainability.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content">
                    {/* <h4>Company Vision</h4> */}
                    <p>
                      Our primary objective is to be a global leader in delivering innovative enabling software solutions, setting standards for customer-centric development and cutting-edge technology, driving sustainable growth and empowering businesses to realize their full potential.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content">
                    {/* <h4>Our Philosophy</h4> */}
                    <p>
                      We believe in the power of innovation, customer collaboration, and technology to create software solutions that not only meet today’s needs but also anticipate tomorrow’s challenges. Our philosophy is to continuously evolve, placing customer satisfaction and sustainable growth at the core of our work, while embracing cutting-edge technology to drive progress and success for businesses and individuals alike.
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