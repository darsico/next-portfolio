import '../styles/globals.css';
import { SiteProvider } from '../context/SiteContext';
import { useEffect, useState } from 'react';
import getDataQuery from '../lib/request';
import Head from 'next/head';
import { QUERY_PROJECTS } from '../src/queries/queryProjects';
import { DataContext } from '../context/DataContext';
import { LanguageProvider } from '../context/LanguageContext';
import { useLanguageStore } from '../store/store';

function App({ Component, pageProps, data }) {
  const [siteData, setSiteData] = useState(data);
  const { userLanguage } = useLanguageStore((state) => state)

  useEffect(() => {
    document.documentElement.lang = userLanguage || "es";
  }, [userLanguage]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DataContext.Provider value={[siteData, setSiteData]}>
        <SiteProvider>
          <LanguageProvider>
            <Component {...pageProps} />
          </LanguageProvider>
        </SiteProvider>
      </DataContext.Provider>
    </>
  );
}

App.getInitialProps = async function () {
  const response = await getDataQuery(QUERY_PROJECTS);
  const projectsData = response?.projectCollection.items;

  return {
    data: projectsData,
  };
};

export default App;
