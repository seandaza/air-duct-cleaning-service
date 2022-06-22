import '../styles/globals.css'
import Head from 'next/head'
import React from 'react';
import Router from 'next/router';

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('571151564566683');
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}


function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
      <script src="https://kit.fontawesome.com/41bcea2ae3.js" crossorigin="anonymous"></script>
        <title>Air duct and vent dryer cleaning services</title>
        <meta name="facebook-domain-verification" content="1pxh1p5s7m83n5y1om0ez4uyvg9p69" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link 
          href="https://fonts.googleapis.com/css2?family=Archivo&family=DM+Sans:wght@400;500;700&family=Open+Sans:wght@700&display=swap" 
          rel="stylesheet"
        />
        
      </Head>
      <FacebookPixel />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
 