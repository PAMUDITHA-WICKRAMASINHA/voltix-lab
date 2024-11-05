import Link from "next/link";
import { Accordion } from "react-bootstrap";

const Header = () => {
    return (
        <header className="main-header header-two">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo-two.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <Accordion>
                    <div className="navbar-header">
                      <div className="mobile-logo my-15">
                        <Link href="/">
                          <a>
                            <img
                              src="assets/images/logos/logo-two.png"
                              alt="Logo"
                              title="Logo"
                            />
                          </a>
                        </Link>
                      </div>
                      {/* Toggle Button */}
                      <Accordion.Toggle
                        eventKey="nav"
                        as="button"
                        className="navbar-toggle"
                      >
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse
                      eventKey="nav"
                      className="navbar-collapse clearfix"
                    >
                      <ul className="navigation onepage clearfix">
                        <li>
                          <a href="#home">Home</a>
                        </li>
                        <li>
                          <a href="#about">about</a>
                        </li>
                        <li>
                          <a href="#featured">featured</a>
                        </li>
                        <li>
                          <a href="#project">project</a>
                        </li>
                        {/* <li>
                          <a href="#pricing">pricing</a>
                        </li> */}
                        <li>
                          <a href="#contact">contact</a>
                        </li>
                        {/* <li>
                          <a href="#news">news</a>
                        </li> */}
                      </ul>
                    </Accordion.Collapse>
                  </Accordion>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Nav Search */}
              {/* <div className="nav-search py-15">
                <button className="far fa-search" />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="hide"
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="searchbox"
                    required=""
                  />
                  <button
                    type="submit"
                    className="searchbutton far fa-search"
                  />
                </form>
              </div> */}
              {/* Menu Button */}
              <div className="menu-btns">
                {/* <Link href="/contact">
                  <a className="theme-btn style-three">
                    Get a Quote <i className="fas fa-angle-double-right" />
                  </a>
                </Link> */}
                {/* menu sidbar */}
                {/* <div className="menu-sidebar">
                  <button onClick={() => sideBarToggle()}>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
    )
}

export default Header;
