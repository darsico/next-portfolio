import "../styles/globals.css";
import { SiteContext } from "../context/SiteContext";
import { useState } from "react";
import requestData from "../lib/request";
import { QUERY_SITE_DATA } from "../data/site";
import Head from "next/head";
import { DesignProjectsProvider } from "../context/DesignProjectsContext";
import { WebDevProjectsProvider } from "../context/WebDevProjectContext";

function App({ Component, pageProps, data }) {
  const [siteData, setSiteData] = useState(data);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <WebDevProjectsProvider>
        <DesignProjectsProvider>
          <SiteContext.Provider value={[siteData, setSiteData]}>
            <Component {...pageProps} />
          </SiteContext.Provider>
        </DesignProjectsProvider>
      </WebDevProjectsProvider>
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
