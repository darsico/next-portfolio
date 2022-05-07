import "../styles/globals.css";
import { SiteContext } from "../context/SiteContext";
import { useEffect, useState } from "react";
import requestData from "../lib/request";
import { QUERY_SITE_DATA } from "../data/site";
import Head from "next/head";
import LoadingScreen from "../components/Loaders/Preloader/LoadingScreen";

function App({ Component, pageProps, data }) {
  const [siteData, setSiteData] = useState(data);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let counting = 0;
    const counter = setInterval(() => {
      counting = counting + 2;
      setCount(counting);
      if (counting >= 101) {
        clearInterval(counter);
        setLoading(true);
        return;
      }
    }, 60);
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SiteContext.Provider value={[siteData, setSiteData]}>
        {loading ? <Component {...pageProps} /> : <LoadingScreen count={count} />}
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
