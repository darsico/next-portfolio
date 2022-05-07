import "../styles/globals.css";
import { SiteContext } from "../context/SiteContext";
import { useEffect, useState } from "react";
import requestData from "../lib/request";
import { QUERY_SITE_DATA } from "../data/site";
import Head from "next/head";
import LoadingScreen from "../components/Loaders/Preloader/LoadingScreen";

function App({ Component, pageProps, data }) {
  const [siteData, setSiteData] = useState(data);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SiteContext.Provider value={[siteData, setSiteData]}>
        <Component {...pageProps} />
      </SiteContext.Provider>
    </>
  );
}

App.getInitialProps = async function () {
  const data = await requestData(QUERY_SITE_DATA);
  return {
    data: data,
  };
};

export default App;
