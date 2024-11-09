import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Voltix Lab - Web Services and Solutions</title>

        {/* Basic Meta Tags */}
        <title>Voltix Lab - Innovative IT Solutions & Software Development</title>
        <meta name="description" content="Voltix Lab is a software development company offering cutting-edge IT solutions, web development, and mobile app services to boost your business." />
        <meta name="keywords" content="Voltix Lab, software development, IT solutions, web development, mobile apps, software company, technology" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Voltix Lab - Innovative IT Solutions & Software Development" />
        <meta property="og:description" content="Voltix Lab provides high-quality software development and IT services, delivering solutions for your business needs." />
        <meta property="og:image" content="assets\images\logos\logo-two.png" />
        <meta property="og:url" content="https://www.voltixlab.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Voltix Lab - Innovative IT Solutions & Software Development" />
        <meta name="twitter:description" content="Voltix Lab offers top-notch software development and IT services to elevate your business." />
        <meta name="twitter:image" content="/path-to-your-image.jpg" /> */}

        {/* Additional SEO & Accessibility Meta Tags */}
        <link rel="canonical" href="https://www.voltixlab.com" />
        <meta name="robots" content="index, follow" />

        <link
          rel="shortcut icon"
          href="assets\images\logos\logo-two.png"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />

        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600&family=Kumbh+Sans:wght@400;500;700&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
        {/* Bootstrap */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        {/* Nice Select */}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        {/* Type Writer */}
        <link rel="stylesheet" href="assets/css/jquery.animatedheadline.css" />
        {/* Animate */}
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        {/* Slick */}
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        {/* Main Style */}
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
