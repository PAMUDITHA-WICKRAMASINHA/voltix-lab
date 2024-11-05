const Contact = () => {
    return (
        <section
        id="contact"
        className="contact-area overflow-hidden py-130 bgc-black-with-lighting rel z-1"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-55">
                  <h2>
                    Have any project on mind! feel free contact with us or{" "}
                    <span>say hello</span>
                  </h2>
                </div>
                <div className="contact-info-wrap">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <span className="title">Location</span>
                      <b className="text">582 Main address, 2nd floor, USA</b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope-open-text" />
                    </div>
                    <div className="content">
                      <span className="title">Email Address</span>
                      <b className="text">
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                      </b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="content">
                      <span className="title">Phone No</span>
                      <b className="text">
                        <a href="callto:+000(123)45699">+000 (123) 456 99</a>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="contact-area-form"
                className="contact-area-form text-center wow fadeInRight delay-0-2s"
                name="contact-area-form"
                action="#"
                method="post"
              >
                <h4>Send us Message</h4>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="form-control"
                  defaultValue=""
                  placeholder="Full Name"
                  required=""
                />
                <input
                  type="email"
                  id="blog-email"
                  name="blog-email"
                  className="form-control"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
                <input
                  type="text"
                  id="website"
                  name="website"
                  className="form-control"
                  defaultValue=""
                  placeholder="Website"
                  required=""
                />
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows={5}
                  placeholder="Write Message"
                  required=""
                  defaultValue={""}
                />
                <button type="submit" className="theme-btn">
                  Send messages <i className="fas fa-angle-double-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-shapes">
          <img
            className="shape circle"
            src="assets/images/shapes/slider-dots.png"
            alt="Shape"
          />
          <img
            className="shape dots"
            src="assets/images/shapes/contact-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave-line"
            src="assets/images/shapes/contact-wave-line.png"
            alt="Shape"
          />
        </div>
      </section>
    )
}

export default Contact;