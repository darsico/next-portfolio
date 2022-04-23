import "../styles/globals.css";
import { SiteContext } from "../hooks/useSiteContext";
import { useState } from "react";
import requestData from "../lib/request";
import { QUERY_SITE_DATA } from "../data/site";

function App({ Component, pageProps, data }) {
  const [siteData, setSiteData] = useState(data);
  return (
    <SiteContext.Provider value={[siteData, setSiteData]}>
      <Component {...pageProps} />
    </SiteContext.Provider>
  );
}

App.getInitialProps = async function () {
  const data = await requestData(QUERY_SITE_DATA);
  console.log(data);
  return {
    data: data,
  };
};

export default App;
