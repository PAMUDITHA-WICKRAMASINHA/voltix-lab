import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import { animation, stickyNav } from "../utils";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

const Layout = ({ children, className, footer, noHeader }) => {
  useEffect(() => {
    animation();
    document.querySelector("body").className = className
      ? className
      : "oxence_body";
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  }, []);
  useEffect(() => {
    return () => {
      niceSelect({ withoutwide: true });
    };
  }, []);
  return (
    <Fragment>
      <div className="page-wrapper">
        {children}
        <ScrollTop />
        <Footer footer={footer} />
      </div>
    </Fragment>
  );
};
export default Layout;
